export const errorHandler = (req, res) => {
  res.status(400).json({ message: "Route not found" });
};
