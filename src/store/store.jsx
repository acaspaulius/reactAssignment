import { create } from 'zustand';

// initial posts to check functionality
const initialPosts = [
  {
    title: 'AUDI 100 COUPE S/GT',
    image: 'https://s1.cdn.autoevolution.com/images/news/1972-audi-100-coupe-s-gt-restomod-looks-like-a-german-eleonor-165651_1.jpeg',
    username: 'user1',
    timestamp: '2024-01-03T14:34:46+02:00',
    id: 'post-1704285286301-373',
  },
  {
    title: 'TOYOTA SUPRA MK4',
    image: 'https://collectingcars.imgix.net/026231/AT-50.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85',
    username: 'user1',
    timestamp: '2024-01-03T14:39:46+02:00',
    id: 'post-1704285586173-513',
  },
  {
    title: 'BMW E30',
    image: 'https://www.pixel4k.com/wp-content/uploads/2021/05/bmw-e30-m3-evo-dtm-4k_1620170158.jpg',
    username: 'user2',
    timestamp: '2024-01-03T14:42:07+02:00',
    id: 'post-1704285727330-520',
  },
];

export const useStore = create((set) => ({
  isLoggedIn: false,
  myUser: {
    username: 'user1',
    password: 'task1',
  },
  users: [
    // default user
    {
      username: 'user1',
      password: 'task1',
    },
  ],
  register: (user) =>
    set((state) => {
      // check if user already exists
      const userExists = state.users.some((u) => u.username === user.username);
      if (userExists) {
        alert('User already exists');
        return { ...state };
      }
      return {
        users: [...state.users, user],
        isLoggedIn: true,
        myUser: user,
      };
    }),
  setMyUser: (user) => set((state) => ({ myUser: user })),
  logIn: (user) => set({ myUser: user, isLoggedIn: true }),
  logOut: () => set({ myUser: null, isLoggedIn: false }),

  updateUsername: (oldUsername, newUsername) =>
    set((state) => {
      const updatedUsers = state.users.map((user) => (user.username === oldUsername ? { ...user, username: newUsername } : user));
      return {
        users: updatedUsers,
        myUser: { ...state.myUser, username: newUsername },
      };
    }),

  posts: initialPosts,
  createPost: (newPost) =>
    set((state) => ({
      posts: [...state.posts, { ...newPost }],
    })),
}));
