import Event from '../models/Event.js';

export const viewEvents = async (req, res) => {
  try {
    const events = await Event.find({ bookedBy: null });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

export const bookEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (event.bookedBy) return res.status(400).json({ error: 'Event already booked' });
    event.bookedBy = req.user.id;
    await event.save();
    res.status(200).json({ message: 'Event booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book event' });
  }
};
