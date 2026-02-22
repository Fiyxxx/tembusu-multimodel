export interface Hotspot {
  id: number;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  thought: string;
  ariaLabel: string;
}

export interface Scenario {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  hotspots: Hotspot[];
  lesson?: string;
  type: 'clickable' | 'quiz';
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Top Down Messaging",
    image: "/number1.png",
    imageAlt: "NDP soldiers marching through crowd with spectators",
    type: 'clickable',
    hotspots: [
      {
        id: 1,
        position: { top: '40%', left: '65%', width: '15%', height: '25%' },
        thought: "Wow…. the army officers are so fierce and professional!!! Singapore is actually so protected despite her small size. #proudtobesingaporean",
        ariaLabel: "Man taking photo of parade"
      },
      {
        id: 2,
        position: { top: '35%', left: '25%', width: '12%', height: '20%' },
        thought: "OMG that's my grandson right there! I'm so proud of him standing strong to defend Singapore and representing the army today! #proudtobesingaporean",
        ariaLabel: "Grandmother watching parade"
      },
      {
        id: 3,
        position: { top: '50%', left: '10%', width: '10%', height: '20%' },
        thought: "The police are so cool in their uniforms and holding their big guns! I want to be one of them when I grow up! #proudtobesingaporean",
        ariaLabel: "Child watching parade"
      }
    ],
    lesson: "The spectacle aims to showcase Singapore's military strength and discipline through an organized parade display."
  },
  {
    id: 2,
    title: "Execution and Received Message",
    image: "/number2.png",
    imageAlt: "Crowd of people celebrating at NDP with flags",
    type: 'clickable',
    hotspots: [
      {
        id: 1,
        position: { top: '60%', left: '75%', width: '15%', height: '25%' },
        thought: "So hot sia… Singapore's weather really cannot make it. AND so crowded… such a small country still got so many people?",
        ariaLabel: "Woman on bottom right"
      },
      {
        id: 2,
        position: { top: '45%', left: '15%', width: '15%', height: '30%' },
        thought: "NDP is so vibes… wait what is this performance about again? I just missed the whole montage because I was taking selfies for Instagram.",
        ariaLabel: "Woman on left taking selfies"
      },
      {
        id: 3,
        position: { top: '40%', left: '45%', width: '15%', height: '30%' },
        thought: "Wow this is a once in a lifetime experience! Being here with all my fellow Singaporeans, all wearing red and white and waving the national flag… that's what I'll remember most from today.",
        ariaLabel: "Woman in middle celebrating"
      }
    ],
    lesson: "The audience may not necessarily focus on what the spectacle is trying to communicate directly. Instead, they are heavily influenced by the setting and atmosphere around the spectacle, including the presence and behaviour of other spectators."
  },
  {
    id: 3,
    title: "Spot the Spectacle",
    image: "/number3.png",
    imageAlt: "People on stage at NDP with someone making inappropriate gesture",
    type: 'quiz',
    hotspots: [],
    lesson: "This was on live television at the end of NDP 2017, and it may well be the only thing most people remember about that year's NDP. Despite a night celebrating Singapore's progress and unity, it ends off ironically with this young boy signing obscenely to the camera. This moment of crudeness stands in stark contrast to the actual parade full of ordered military showcases and cheery, colourful performances."
  }
];

export const getScenarioById = (id: number): Scenario | undefined => {
  return scenarios.find(s => s.id === id);
};
