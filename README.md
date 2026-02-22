# Spectacles and Society - Interactive Web App

An educational interactive web experience exploring how spectacles function in society, built for Tembusu College's Spectacles & Society module.

Created by: Chloe, Megan, Han Sheng

## Features

- **3 Interactive Scenarios** based on Singapore National Day Parade
- **Pokemon-style aesthetic** with Geist Mono font and retro UI
- **Custom animations** including typewriter effects and smooth transitions
- **Fully responsive** design for mobile and desktop
- **Accessible** with keyboard navigation and ARIA labels

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Geist Mono Font

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Main menu
│   ├── scenario/[id]/     # Dynamic scenario routes
│   └── thank-you/         # End screen
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── TextBox.tsx
│   ├── ThoughtBubble.tsx
│   ├── ClickableHotspot.tsx
│   └── ScenarioImage.tsx
├── lib/                   # Data and utilities
│   └── scenarios.ts       # Scenario content and configuration
├── styles/                # Custom CSS
│   └── animations.css     # Pokemon-style animations
└── public/               # Static assets
    ├── number1.png
    ├── number2.png
    └── number3.png
```

## Scenarios

### 1. Top Down Messaging
Explore how spectacles communicate top-down messages through organized military displays.

### 2. Execution and Received Message
Discover how audiences interpret spectacles through their own experiences and surroundings.

### 3. Spot the Spectacle
Identify how unintended moments can become the most memorable part of a spectacle.

## Customization

### Adjusting Hotspot Positions

Edit `lib/scenarios.ts` and modify the `position` object for each hotspot:

```typescript
position: {
  top: '40%',    // Vertical position
  left: '65%',   // Horizontal position
  width: '15%',  // Click area width
  height: '25%'  // Click area height
}
```

### Changing Animation Speed

Edit `components/TextBox.tsx` or `components/ThoughtBubble.tsx` and adjust the `speed` prop (milliseconds per character).

## License

Educational project for Tembusu College.
