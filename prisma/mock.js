export const PARTICIPANTS = [
  {
    nickname: "user1",
    password: "password1",
    isOwner: true,
    groupId: 1,
  },
  {
    nickname: "user2",
    password: "password2",
    groupId: 1,
  },
  {
    nickname: "user3",
    password: "password3",
    isOwner: true,
    groupId: 2,
  },
  {
    nickname: "user4",
    password: "password4",
    groupId: 1,
  },
  {
    nickname: "user5",
    password: "password5",
    groupId: 2,
  },
  {
    nickname: "user6",
    password: "password6",
    isOwner: true,
    groupId: 3,
  },
  {
    nickname: "user7",
    password: "password7",
    groupId: 3,
  },
  {
    nickname: "user8",
    password: "password8",
    groupId: 3,
  },
  {
    nickname: "user9",
    password: "password9",
    isOwner: true,
    groupId: 4,
  },
  {
    nickname: "user10",
    password: "password10",
    groupId: 4,
  },
  {
    nickname: "user11",
    password: "password11",
    groupId: 4,
  },
  {
    nickname: "user12",
    password: "password12",
    isOwner: true,
    groupId: 5,
  },
  {
    nickname: "user13",
    password: "password13",
    groupId: 5,
  },
  {
    nickname: "user14",
    password: "password14",
    groupId: 5,
  },
  {
    nickname: "user15",
    password: "password15",
    isOwner: true,
    groupId: 6,
  },
  {
    nickname: "user16",
    password: "password16",
    groupId: 6,
  },
];

export const GROUPS = [
  {
    name: "Group 1",
    description: "This is group 1",
    photoUrl: "http://example.com/group1.jpg",
    goalRep: 10,
    discordWebhookUrl: "http://example.com/discord1",
    discordInviteUrl: "http://example.com/discord/invite1",
    tags: [{ name: "tag1" }, { name: "tag2" }],
  },
  {
    name: "Group 2",
    description: "This is group 2",
    photoUrl: "http://example.com/group2.jpg",
    goalRep: 20,
    tags: [{ name: "tag2" }, { name: "tag3" }],
  },
  {
    name: "Running Enthusiasts",
    description: "A group for running lovers",
    photoUrl: "http://example.com/running.jpg",
    goalRep: 50,
    tags: [{ name: "tag4" }],
  },
  {
    name: "Cycling Club",
    description: "Join us for weekly bike rides",
    photoUrl: "http://example.com/cycling.jpg",
    goalRep: 30,
    tags: [{ name: "tag5" }, { name: "tag7" }],
  },
  {
    name: "Swimming Squad",
    description: "Swim together and improve your skills",
    photoUrl: "http://example.com/swimming.jpg",
    goalRep: 40,
    tags: [{ name: "tag6" }, { name: "tag9" }],
  },
  {
    name: "Fitness Friends",
    description: "A group for all types of fitness activities",
    photoUrl: "http://example.com/fitness.jpg",
    goalRep: 60,
    tags: [{ name: "tag7" }, { name: "tag8" }],
  },
];

export const RECORDS = [
  {
    exerciseType: "RUN",
    description: "Morning run",
    time: 30,
    distance: 5.5,
    photos: ["http://example.com/run1.jpg", "http://example.com/run2.jpg"],
    authorId: 1,
  },
  {
    exerciseType: "BIKE",
    description: "Evening bike ride",
    time: 60,
    distance: 20.0,
    photos: ["http://example.com/bike1.jpg"],
    authorId: 2,
  },
  {
    exerciseType: "SWIM",
    description: "Lunch swim",
    time: 45,
    distance: 1.2,
    photos: ["http://example.com/swim1.jpg"],
    authorId: 3,
  },
  {
    exerciseType: "RUN",
    description: "Long distance run",
    time: 90,
    distance: 15.0,
    photos: ["http://example.com/run3.jpg", "http://example.com/run4.jpg"],
    authorId: 4,
  },
  {
    exerciseType: "BIKE",
    description: "Mountain bike ride",
    time: 120,
    distance: 35.0,
    photos: ["http://example.com/bike2.jpg", "http://example.com/bike3.jpg"],
    authorId: 5,
  },
  {
    exerciseType: "SWIM",
    description: "Open water swim",
    time: 60,
    distance: 2.0,
    photos: ["http://example.com/swim2.jpg"],
    authorId: 6,
  },
  {
    exerciseType: "RUN",
    description: "Interval training",
    time: 45,
    distance: 8.0,
    photos: ["http://example.com/run5.jpg"],
    authorId: 7,
  },
  {
    exerciseType: "BIKE",
    description: "City bike ride",
    time: 75,
    distance: 25.0,
    photos: ["http://example.com/bike4.jpg"],
    authorId: 8,
  },
  {
    exerciseType: "SWIM",
    description: "Pool laps",
    time: 30,
    distance: 1.5,
    photos: ["http://example.com/swim3.jpg"],
    authorId: 9,
  },
  {
    exerciseType: "RUN",
    description: "Trail run",
    time: 60,
    distance: 10.0,
    photos: ["http://example.com/run6.jpg"],
    authorId: 10,
  },
  {
    exerciseType: "BIKE",
    description: "Road bike ride",
    time: 90,
    distance: 30.0,
    photos: ["http://example.com/bike5.jpg"],
    authorId: 11,
  },
  {
    exerciseType: "SWIM",
    description: "Technique practice",
    time: 45,
    distance: 1.8,
    photos: ["http://example.com/swim4.jpg"],
    authorId: 12,
  },
  {
    exerciseType: "RUN",
    description: "Recovery run",
    time: 30,
    distance: 4.0,
    photos: ["http://example.com/run7.jpg"],
    authorId: 13,
  },
  {
    exerciseType: "BIKE",
    description: "Group ride",
    time: 120,
    distance: 40.0,
    photos: ["http://example.com/bike6.jpg"],
    authorId: 14,
  },
  {
    exerciseType: "SWIM",
    description: "Endurance swim",
    time: 60,
    distance: 2.5,
    photos: ["http://example.com/swim5.jpg"],
    authorId: 15,
  },
  {
    exerciseType: "RUN",
    description: "Speed training",
    time: 35,
    distance: 6.0,
    photos: ["http://example.com/run8.jpg"],
    authorId: 16,
  },
  {
    exerciseType: "BIKE",
    description: "Long distance ride",
    time: 150,
    distance: 50.0,
    photos: ["http://example.com/bike7.jpg", "http://example.com/bike8.jpg"],
    authorId: 1,
  },
  {
    exerciseType: "SWIM",
    description: "Drill practice",
    time: 50,
    distance: 2.2,
    photos: ["http://example.com/swim6.jpg"],
    authorId: 2,
  },
  {
    exerciseType: "RUN",
    description: "Fartlek run",
    time: 40,
    distance: 7.0,
    photos: ["http://example.com/run9.jpg"],
    authorId: 3,
  },
  {
    exerciseType: "BIKE",
    description: "Hilly ride",
    time: 100,
    distance: 32.0,
    photos: ["http://example.com/bike9.jpg"],
    authorId: 4,
  },
  {
    exerciseType: "SWIM",
    description: "Relay practice",
    time: 55,
    distance: 2.4,
    photos: ["http://example.com/swim7.jpg"],
    authorId: 5,
  },
  {
    exerciseType: "RUN",
    description: "Tempo run",
    time: 45,
    distance: 8.5,
    photos: ["http://example.com/run10.jpg"],
    authorId: 6,
  },
  {
    exerciseType: "BIKE",
    description: "Commute ride",
    time: 60,
    distance: 18.0,
    photos: ["http://example.com/bike10.jpg"],
    authorId: 7,
  },
  {
    exerciseType: "SWIM",
    description: "Sprint intervals",
    time: 35,
    distance: 1.6,
    photos: ["http://example.com/swim8.jpg"],
    authorId: 8,
  },
  {
    exerciseType: "RUN",
    description: "Easy run",
    time: 30,
    distance: 5.0,
    photos: ["http://example.com/run11.jpg"],
    authorId: 9,
  },
  {
    exerciseType: "BIKE",
    description: "Weekend ride",
    time: 120,
    distance: 42.0,
    photos: ["http://example.com/bike11.jpg"],
    authorId: 10,
  },
  {
    exerciseType: "SWIM",
    description: "Cool down swim",
    time: 20,
    distance: 1.0,
    photos: ["http://example.com/swim9.jpg"],
    authorId: 11,
  },
  {
    exerciseType: "RUN",
    description: "Hill repeats",
    time: 50,
    distance: 9.0,
    photos: ["http://example.com/run12.jpg"],
    authorId: 12,
  },
  {
    exerciseType: "BIKE",
    description: "Night ride",
    time: 90,
    distance: 28.0,
    photos: ["http://example.com/bike12.jpg"],
    authorId: 13,
  },
  {
    exerciseType: "SWIM",
    description: "Long swim",
    time: 70,
    distance: 3.0,
    photos: ["http://example.com/swim10.jpg"],
    authorId: 14,
  },
];

export const TAGS = [
  { name: "tag1" },
  { name: "tag2" },
  { name: "tag3" },
  { name: "tag4" },
  { name: "tag5" },
  { name: "tag6" },
  { name: "tag7" },
  { name: "tag8" },
  { name: "tag9" },
];
