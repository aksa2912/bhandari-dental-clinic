'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [blockDate, setBlockDate] = useState('');
  const [blockReason, setBlockReason] = useState('');

  const fetchAppointments = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, {
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 401) {
          window.location.href = '/login';
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data) setAppointments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include' 
      });
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const handleBlockDate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blocked-dates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ date: blockDate, reason: blockReason })
      });
      if (res.ok) {
        alert('✅ Date blocked successfully!');
        setBlockDate('');
        setBlockReason('');
      } else {
        alert('Failed to block date');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = async (id: number) => {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments/${id}/cancel`, {
        method: 'PATCH',
        credentials: 'include'
      });
      
      if (res.ok) {
        // Refresh the table to show the updated status
        fetchAppointments(); 
      } else {
        alert('Failed to cancel appointment');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="space-x-4">
            <button onClick={fetchAppointments} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Refresh
            </button>
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700">
              Log Out
            </button>
          </div>
        </div>

        {/* Block Date Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Block a Date</h2>
          <form onSubmit={handleBlockDate} className="flex gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input 
                type="date" 
                required 
                value={blockDate} 
                onChange={e => setBlockDate(e.target.value)} 
                className="border p-2 rounded" 
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Reason (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Diwali Holiday" 
                value={blockReason} 
                onChange={e => setBlockReason(e.target.value)} 
                className="w-full border p-2 rounded" 
              />
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Block Date
            </button>
          </form>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Patient</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Treatment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th> {/* <-- Added Action Header */}
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                appointments.map((appt) => (
                  <tr key={appt.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{formatDate(appt.start_time)}</td>
                    <td className="p-4">
                      {formatTime(appt.start_time)} - {formatTime(appt.end_time)}
                    </td>
                    <td className="p-4 font-semibold">{appt.patient_name}</td>
                    <td className="p-4">{appt.patient_phone}</td>
                    <td className="p-4">{appt.treatment_name}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        appt.status === 'cancelled' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {appt.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {appt.status !== 'cancelled' && (
                        <button 
                          onClick={() => handleCancel(appt.id)}
                          className="text-red-600 hover:text-red-800 font-medium text-sm"
                        >
                          Cancel
                        </button>
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
  );
}