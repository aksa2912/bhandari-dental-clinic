'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [blockedTimes, setBlockedTimes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [blockStart, setBlockStart] = useState('');
  const [blockEnd, setBlockEnd] = useState('');
  const [blockReason, setBlockReason] = useState('');

  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, { credentials: 'include' })
      .then(res => {
        if (res.status === 401) { window.location.href = '/login'; return null; }
        if (res.ok) return res.json();
        throw new Error('Server error');
      })
      .then(data => { if (data) setAppointments(data); })
      .catch(err => console.error(err));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blocked-dates`, { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(data => { if (data) { setBlockedTimes(data); setLoading(false); } })
      .catch(err => { console.error(err); setLoading(false); });
  };

  useEffect(() => { fetchData(); }, []);

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' });
    window.location.href = '/login';
  };

  const handleBlockTime = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blocked-dates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          startTime: new Date(blockStart).toISOString(),
          endTime: new Date(blockEnd).toISOString(),
          reason: blockReason
        })
      });
      if (res.ok) {
        alert('✅ Time blocked!');
        setBlockStart(''); setBlockEnd(''); setBlockReason('');
        fetchData();
      } else { alert('Failed to block time'); }
    } catch (err) { console.error(err); }
  };

  const handleUnblock = async (id: number) => {
    if (!confirm('Remove this block?')) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blocked-dates/${id}`, { method: 'DELETE', credentials: 'include' });
    fetchData();
  };

  const handleCancel = async (id: number) => {
    if (!confirm('Cancel this appointment?')) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments/${id}/cancel`, { method: 'PATCH', credentials: 'include' });
    fetchData();
  };

  const formatTime = (iso: string) => new Date(iso).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });
  const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short' });

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Responsive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex gap-2 w-full md:w-auto">
            <button onClick={fetchData} className="flex-1 md:flex-none bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Refresh</button>
            <button onClick={handleLogout} className="flex-1 md:flex-none bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700">Log Out</button>
          </div>
        </div>

        {/* Block Time Form - Stacked on mobile */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold mb-4">Block Specific Time</h2>
          <form onSubmit={handleBlockTime} className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Start Time</label>
              <input type="datetime-local" required value={blockStart} onChange={e => setBlockStart(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">End Time</label>
              <input type="datetime-local" required value={blockEnd} onChange={e => setBlockEnd(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Reason</label>
              <input type="text" placeholder="e.g. Lunch Break" value={blockReason} onChange={e => setBlockReason(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <button type="submit" className="w-full md:w-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Block Time</button>
          </form>
        </div>

        {/* Active Blocked Times */}
        {blockedTimes.length > 0 && (
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold mb-4">Active Blocked Times</h2>
            <ul className="space-y-2">
              {blockedTimes.map(bt => (
                <li key={bt.id} className="flex flex-col md:flex-row justify-between md:items-center bg-gray-50 p-3 rounded border gap-2">
                  <span className="text-sm md:text-base">
                    <strong>{formatDate(bt.start_time)}:</strong> {formatTime(bt.start_time)} - {formatTime(bt.end_time)} 
                    {bt.reason && <span className="text-gray-500 ml-2">({bt.reason})</span>}
                  </span>
                  <button onClick={() => handleUnblock(bt.id)} className="text-red-600 hover:text-red-800 font-medium text-sm text-left md:text-right w-full md:w-auto">Unblock</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Appointments - Cards on mobile, Table on desktop */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Mobile View (Cards) */}
          <div className="block md:hidden divide-y divide-gray-200">
            {appointments.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No appointments found.</div>
            ) : (
              appointments.map(appt => (
                <div key={appt.id} className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-semibold text-gray-800">{appt.patient_name}</div>
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${appt.status === 'cancelled' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                      {appt.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>📅 {formatDate(appt.start_time)}</div>
                    <div>⏰ {formatTime(appt.start_time)} - {formatTime(appt.end_time)}</div>
                    <div>🦷 {appt.treatment_name}</div>
                    <div>📞 {appt.patient_phone}</div>
                  </div>
                  {appt.status !== 'cancelled' && (
                    <button onClick={() => handleCancel(appt.id)} className="w-full mt-2 text-red-600 hover:text-red-800 font-medium text-sm border border-red-200 rounded py-1">Cancel Appointment</button>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Desktop View (Table) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4">Date</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Patient</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Treatment</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length === 0 ? (
                  <tr><td colSpan={7} className="p-8 text-center text-gray-500">No appointments found.</td></tr>
                ) : (
                  appointments.map(appt => (
                    <tr key={appt.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{formatDate(appt.start_time)}</td>
                      <td className="p-4">{formatTime(appt.start_time)} - {formatTime(appt.end_time)}</td>
                      <td className="p-4 font-semibold">{appt.patient_name}</td>
                      <td className="p-4">{appt.patient_phone}</td>
                      <td className="p-4">{appt.treatment_name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${appt.status === 'cancelled' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                          {appt.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {appt.status !== 'cancelled' && (
                          <button onClick={() => handleCancel(appt.id)} className="text-red-600 hover:text-red-800 font-medium text-sm">Cancel</button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}