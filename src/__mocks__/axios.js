const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "James",
          last: "harts",
        },
        picture: {
          large: "http://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "james",
        },
      },
    ],
  },
};
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
