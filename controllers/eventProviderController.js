import Event from '../models/Event.js';

export const createEvent = async (req, res) => {
    try {
      const { title, description, date, category, photos } = req.body;
      
      if (!title || !description || !date || !category || !photos) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const event = new Event({ title, description, date, category, photos, createdBy: req.user.id });
      await event.save();
      res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  };
  

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};
