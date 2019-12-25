import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5Sce5JyCp9CNO_0w4Hs4EhfOA6YjGftaXNj26QgPa8ZROtV5YRXTQbYyBUqAy9E7XvVyG3tZoxi_3zE3Ag3LxXyWmMLY292pv68SO0x03nIL3UdNKzNEG0JmUjYBXnYx"
  }
});
