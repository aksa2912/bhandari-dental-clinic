'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export default function BookPage() {
  const [treatments, setTreatments] = useState<any[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  
  // Patient details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // 1. Fetch treatments on load
  useEffect(() => {
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/treatments`)
      .then(res => res.json())
      .then(data => setTreatments(data))
      .catch(err => console.error(err));
  }, []);

  // 2. Fetch available slots when date or treatment changes
  useEffect(() => {
    if (date && selectedTreatment) {
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/availability?date=${date}&treatmentId=${selectedTreatment}`)    
    .then(res => res.json())
        .then(data => setSlots(data.availableSlots || []))
        .catch(err => console.error(err));
    }
  }, [date, selectedTreatment]);

  // 3. Submit booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Booking...');

    try {
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName: name,
          patientPhone: phone,
          treatmentId: parseInt(selectedTreatment),
          startTime: selectedSlot
        })
      });

      const data = await res.json();

      if (res.status === 201) {
        setMessage('✅ Appointment Confirmed!');
                // Refresh the slots so the booked one disappears
        fetch(`http://localhost:5000/api/availability?date=${date}&treatmentId=${selectedTreatment}`)
          .then(res => res.json())
          .then(data => setSlots(data.availableSlots || []));
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setMessage('❌ Failed to connect to server.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Book an Appointment</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Treatment */}
          <div>
            <label className="block text-sm font-medium mb-1">Treatment</label>
            <select 
              required
              className="w-full border p-2 rounded"
              value={selectedTreatment}
              onChange={(e) => { setSelectedTreatment(e.target.value); setSelectedSlot(''); }}
            >
              <option value="">Select a treatment</option>
              {treatments.map(t => (
                <option key={t.id} value={t.id}>{t.name} ({t.duration_minutes} mins)</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input 
              type="date" 
              required
              className="w-full border p-2 rounded"
              value={date}
              onChange={(e) => { setDate(e.target.value); setSelectedSlot(''); }}
            />
          </div>

          {/* Slots */}
          {slots.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-1">Available Time</label>
              <div className="grid grid-cols-3 gap-2">
                {slots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2 text-sm rounded border ${selectedSlot === slot ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {new Date(slot).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Patient Details */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" required className="w-full border p-2 rounded" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" required className="w-full border p-2 rounded" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Confirm Booking
          </button>
        </form>

        {message && <p className="mt-4 text-center font-medium">{message}</p>}
      </div>
    </div>
  );
}