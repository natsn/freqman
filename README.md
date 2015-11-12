# freqman
A frequency management app for drone racers written in JS.

# Setup

 1. Install [Node.js LTS](https://nodejs.org/en/)
 2. `npm install` (from the `freqman/` directory once you clone/fork this repo)
 3. `npm run tsc` (then `ctrl + c` to stop watching for changes in `.ts` files)
 4. `npm run` (will launch our live server)

# Schema

__note: this is in flux__

### Event
 - id
 - name
 - date
 - `hasMany` Races

### Race
 - id
 - `hasMany` Racer (multiple racers with assigned channels)
 - `belongsTo` Event
 
### Racer
 - id
 - racer_name
 - video_transmitter
 - preferred_channel
 - can_move
 - assigned_channel



