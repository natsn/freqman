// Channels / Bands
var fatshark = [5740,5760,5780,5800,5820,5840,5960]
var boscam_a = [5865,5845,5825,5805,5785,5765,5745,5725]
var boscam_b = [5733,5752,5771,5790,5809,5828,5847,5866]
var boscam_e = [5705,5685,5665,5645,5885,5905,5925,5945]
var boscam_f = [5740,5760,5780,5800,5820,5840,5860,5880]
var raceband = [5658,5695,5732,5769,5806,5843,5880,5917]

var ch8 = fatshark
var ch32 = fatshark + boscam_a + boscam_e + raceband
var ch40 = fatshark + boscam_a + boscam_e + raceband + boscam_f

/* 
Racer Properties 

Event
 - id
 - name
 - date
 - hasMany Races

Heat
 - id
 - hasMany Racer (multiple racers with assigned channels)
 - belongsTo Event
 
Racer
 - id
 - racer_name
 - video_transmitter
 - preffered_channnel
 - can_move
 - assigned_channel

multi GP - competitor/collaborator

*/

// TODO create a slotting / frequency spread algorithm
