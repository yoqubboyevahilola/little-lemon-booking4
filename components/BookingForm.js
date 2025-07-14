import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      setError('Iltimos, barcha majburiy maydonlarni to'ldiring.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log('Bron qilingan ma'lumotlar:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>Ism*</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Email*</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Sana*</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />

      <label>Vaqt*</label>
      <select name="time" value={formData.time} onChange={handleChange}>
        <option value="">Tanlang</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>

      <label>Mehmonlar soni*</label>
      <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="20" />

      <label>Izoh</label>
      <textarea name="notes" value={formData.notes} onChange={handleChange} />

      {error && <p className="error">{error}</p>}
      {submitted && <p className="success">Bron qilish muvaffaqiyatli amalga oshirildi!</p>}

      <button type="submit">Bron qilish</button>
    </form>
  );
}

export default BookingForm;
