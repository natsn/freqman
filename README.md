# freqman
A frequency management app for drone racers written in JS.

# Setup

 1. Install [Node.js LTS](https://nodejs.org/en/)
 2. `npm install` (from the `freqman/` directory once you clone/fork this repo)
 3. `npm run tsc` (then `ctrl + c` to stop watching for changes in `.ts` files)
 4. `npm run` (will launch our live server)

# Schema

_note: this is in flux_

### Event
 - id (number)
 - name (string)
 - date (date)
 - `hasMany` Races

### Race
 - id (number)
 - position (number)
 - `hasMany` Racer (multiple racers with assigned channels)
 - `belongsTo` Event
 
### Racer
 - id (number)
 - racer_name (string)
 - video_transmitter (object)
 - preferred_channel (number)
 - can_move (boolean)
 - the_assigned_channel (number)



