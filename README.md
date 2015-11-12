# freqman
A frequency management app for drone racers written in JS.

# Schema

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



