import cryingSong from "../music/crying-song.m4a"
import shootout from "../music/shootout.m4a"
import katyPery from "../music/katy-pery.mp3"
import pusu from "../music/pusu.m4a"
import nobodyReally from "../music/nobody-really.m4a"
import cowbellWarrior from "../music/cowbell-warrior.mp3"
import myLove from "../music/my-love.m4a"
import shapeOfYou from "../music/shape-of-you.m4a"
import tiIYaSlowed from "../music/ti-i-ya-slowed.mp3"
import tiIYa from "../music/ti-i-ya.mp3"
import tiNeTakoy from "../music/ty-ne-takoy.m4a"
import { v4 as uuid } from "uuid"

export const data = [
    { id: uuid(), name: "Ты и я", author: "Uknown Artist", mp: tiIYa },
    { id: uuid(), name: "Crying song", author: "Uknown Artist", mp: cryingSong },
    { id: uuid(), name: "Shootout", author: "Uknown Artist", mp: shootout },
    { id: uuid(), name: "E.T Main", author: "Katy Pery", mp: katyPery },
    { id: uuid(), name: "Pusu", author: "Kejoo Beats", mp: pusu },
    { id: uuid(), name: "Nobody Really", author: "Uknown Artist", mp: nobodyReally },
    { id: uuid(), name: "Cowbell Warrior", author: "SXMPRA", mp: cowbellWarrior },
    { id: uuid(), name: "My Love", author: "Uknown Artist", mp: myLove },
    { id: uuid(), name: "Shape of you", author: "Ed Sheeran", mp: shapeOfYou },
    { id: uuid(), name: "Ты и я slowed", author: "Uknown Artist", mp: tiIYaSlowed },
    { id: uuid(), name: "Ты не такой", author: "Uknown Artist", mp: tiNeTakoy },
]