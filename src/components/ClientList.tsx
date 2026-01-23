import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const credits = [
  { id: 1, spot: "Topps", song: "Run (Inst)", artist: "Cut The Lights (Book Inst)", year: "2025" },
  { id: 2, spot: "Pawn Stars Do America - HISTORY PROMO", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 3, spot: "MLB Network Postseason Promo", song: "Viva La Vida", artist: "Freq Motif", year: "2022" },
  { id: 4, spot: "Google DSM Nest Doorbell", song: "Introducing (Inst.)", artist: "Book", year: "2022" },
  { id: 5, spot: "Airbnb \"Venice\"", song: "I Feel It Coming (Inst)", artist: "Pontic", year: "2019" },
  { id: 6, spot: "Milwaukee Brewers Opener Video - postseason", song: "Light The City Up", artist: "Cut The Lights", year: "2023" },
  { id: 7, spot: "Ryder Cup Broadcast", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2018" },
  { id: 8, spot: "The Flash (The CW Network)", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 9, spot: "Indycar Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2018" },
  { id: 10, spot: "Apple \"Mountain Peak\" Project", song: "Driftin'", artist: "Lex Junior", year: "2019" },
  { id: 11, spot: "Bruised (Film)", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2020" },
  { id: 12, spot: "Chucky, ep. 104", song: "Control", artist: "Pretty Lungs", year: "2021" },
  { id: 13, spot: "America's Got Talent S17", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 14, spot: "2020 NFL Awareness Promo", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2020" },
  { id: 15, spot: "Microsoft Surface Sizzle", song: "I Only Have Eyes For You (Cover)", artist: "BOGA", year: "2019" },
  { id: 16, spot: "EMPIRE Fox Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 17, spot: "Las Vegas Raiders In-Stadium Hype Video 2024/25", song: "Light The City Up", artist: "Cut The Lights", year: "2024" },
  { id: 18, spot: "MTV – The Challenge S39 Promo", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2023" },
  { id: 19, spot: "Raising Dion, ep. 208", song: "On The Move", artist: "Cut The Lights", year: "2022" },
  { id: 20, spot: "Mack & Rita (Film)", song: "Hot", artist: "Just John, Freq Motif", year: "2022" },
  { id: 21, spot: "The Blackening (Film)", song: "Run", artist: "Cut The Lights", year: "2022" },
  { id: 22, spot: "Run The World, ep. 204", song: "Move Around", artist: "Book ft. Bosco", year: "2023" },
  { id: 23, spot: "Skoda Car Brand Event", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 24, spot: "ACC ESPN Football Promo", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2021" },
  { id: 25, spot: "Love Island, ep 409", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2022" },
  { id: 26, spot: "Love Island Games, Ep. 108", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2023" },
  { id: 27, spot: "eBay Ad", song: "On The Move (Inst)", artist: "Book", year: "2020" },
  { id: 28, spot: "My Spy: The Eternal City (Film)", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2023" },
  { id: 29, spot: "NYC Real Estate / Metropolitan Park", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2025" },
  { id: 30, spot: "Hightown Promos (Hulu)", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2021" },
  { id: 31, spot: "Behind The Mac Canada (Apple)", song: "Hot", artist: "Just John, Freq Motif", year: "2021" },
  { id: 32, spot: "FC 25 (Video Game)", song: "Today", artist: "Freq Motif, Kaleta", year: "2024" },
  { id: 33, spot: "Sunday Night Football Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 34, spot: "Only Murders In The Building, Ep. 209", song: "Say That Again", artist: "Book ft. Roshin", year: "2022" },
  { id: 35, spot: "Deathloop (Video Game)", song: "Nowhere To Run (Cover)", artist: "BOGA", year: "2019" },
  { id: 36, spot: "Four Weddings & A Funeral, Ep. 106", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 37, spot: "Fistful of Vengeance (Film)", song: "Charged Up", artist: "Cut The Lights", year: "2022" },
  { id: 38, spot: "Ford Bronco Sport Ad", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2021" },
  { id: 39, spot: "Spider-Man: Across The Spider-Verse (Film)", song: "Light The City Up", artist: "Cut The Lights", year: "2023" },
  { id: 40, spot: "ESPN Women's College World Series", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2018" },
  { id: 41, spot: "Ford F-150 All Electric Ad", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2021" },
  { id: 42, spot: "Braquers (TV Show)", song: "Run", artist: "Cut The Lights", year: "2021" },
  { id: 43, spot: "Deathloop Gameplay Reveal Trailer", song: "Inside Looking Out", artist: "Book ft. Ndidi O", year: "2020" },
  { id: 44, spot: "All Rise, Bonus Ep.", song: "Move Around", artist: "Book ft. Bosco", year: "2020" },
  { id: 45, spot: "Daybreak, Ep. 101 (Netflix)", song: "Take Off", artist: "Cut The Lights", year: "2019" },
  { id: 46, spot: "Wildhood (Film)", song: "Run", artist: "Cut The Lights", year: "2021" },
  { id: 47, spot: "Apple Smoke Ring Ad", song: "Body Wan Shake", artist: "Freq Motif, Magugu", year: "2023" },
  { id: 48, spot: "Ralph Lauren Ad", song: "Custom Work", artist: "Book", year: "2021" },
  { id: 49, spot: "Greenland (Film)", song: "My World (Inst)", artist: "Book", year: "2020" },
  { id: 50, spot: "Halo Top Spot", song: "Driftin'", artist: "Lex Junior", year: "2021" },
  { id: 51, spot: "Cloak & Dagger, Ep. 208", song: "We All Got Our Demons", artist: "BOGA", year: "2019" },
  { id: 52, spot: "ESPN Tournament Challenge Marathon", song: "I Feel It Coming", artist: "Pontic ft. Ndidi O", year: "2019" },
  { id: 53, spot: "Tiny Pretty Things, Ep. 109 (Netflix)", song: "Spotlight", artist: "Lex Junior ft. Carmen", year: "2020" },
  { id: 54, spot: "America's Got Talent: The Champions, Ep. 204", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2020" },
  { id: 55, spot: "Black Lightning, ep. 406", song: "Slow Ride", artist: "BOGA", year: "2021" },
  { id: 56, spot: "Bally Sports Promos", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2021" },
  { id: 57, spot: "Dolce & Gabbana / Shiseido Spot", song: "No Mercy (Inst)", artist: "Ndidi O", year: "2021" },
  { id: 58, spot: "Shrill Promos (Hulu/FX)", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2021" },
  { id: 59, spot: "Fairfax, ep. 102", song: "Take Off", artist: "Cut The Lights", year: "2021" },
  { id: 60, spot: "Turner & Hooch, ep. 104 (Disney+)", song: "Go Wild", artist: "Lex Junior", year: "2021" },
  { id: 61, spot: "God Friended Me, Ep. 212", song: "Introducing", artist: "Ralph", year: "2020" },
  { id: 62, spot: "Tallboyz, S3", song: "Driftin'", artist: "Lex Junior", year: "2022" },
  { id: 63, spot: "Grown-Ish, Ep. 312", song: "Move Around", artist: "Book ft. Bosco", year: "2021" },
  { id: 64, spot: "Panic, Ep. 109 (Amazon)", song: "Renegade", artist: "Book", year: "2021" },
  { id: 65, spot: "Your Honor, Ep. 014 (Showtime)", song: "Too Bright", artist: "Cut The Lights", year: "2023" },
  { id: 66, spot: "Cloak & Dagger, Ep. 202", song: "Blackheart", artist: "BOGA", year: "2019" },
  { id: 67, spot: "Onside: Major League Soccer, Ep. 108", song: "Came To Get It", artist: "Book, Thurz", year: "2025" },
  { id: 68, spot: "Ellen's Game of Games / Titan Games / AGT Champions Combo Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2018" },
  { id: 69, spot: "Self Made: Madam C.J. Walker (Netflix)", song: "Call Me Queen", artist: "Ndidi O", year: "2020" },
  { id: 70, spot: "Mayor of Kingstown, ep. 106", song: "Big Dreams", artist: "Rochester (& Book)", year: "2021" },
  { id: 71, spot: "2024 NFL Postseason Promo", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2025" },
  { id: 72, spot: "Mighty Ducks, Ep 105 (Disney+)", song: "Charged Up", artist: "Cut The Lights", year: "2021" },
  { id: 73, spot: "Netflix Promos for 'The White Tiger'", song: "Spotlight", artist: "Lex Junior ft. Carmen", year: "2020" },
  { id: 74, spot: "NFL's Hard Knocks 2022 Spot", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2022" },
  { id: 75, spot: "The Rookie, Ep. 205", song: "Renegade", artist: "Book", year: "2019" },
  { id: 76, spot: "Walker, Ep. 201", song: "Rise Up", artist: "Ndidi O", year: "2021" },
  { id: 77, spot: "The Equalizer, ep. 3012", song: "Take It All", artist: "Thurz", year: "2023" },
  { id: 78, spot: "Apple TV 2025 MLS Games", song: "Champion (Instrumental)", artist: "Book ft. Haviah Mighty", year: "2025" },
  { id: 79, spot: "2024-2025 NFL Year In Review", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2025" },
  { id: 80, spot: "Amazon Prime Video Sports Q1 2024 Sizzle", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2024" },
  { id: 81, spot: "Godzilla vs. Kong - Trailers", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2021" },
  { id: 82, spot: "VW eManifesto Ad", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 83, spot: "The Long Game, Ep. 104", song: "PutEmUp", artist: "Book", year: "2022" },
  { id: 84, spot: "2019 FSN Combo Launch Promo (MLB)", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 85, spot: "The Rookie, ep. 515", song: "On The Edge", artist: "Cut The Lights", year: "2023" },
  { id: 86, spot: "Good Girls, Ep. 2010", song: "Seeds", artist: "BOGA", year: "2019" },
  { id: 87, spot: "CBS Promo: The Code", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 88, spot: "Hockey Night Canada", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2021" },
  { id: 89, spot: "Stan Sport 10th Birthday Campaign", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2025" },
  { id: 90, spot: "Toyota \"Born for Bringin' It\" Ad", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 91, spot: "Apple Almond Croissant Spot", song: "Blue Skies", artist: "Freq Motif", year: "2022" },
  { id: 92, spot: "Doin' It", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2024" },
  { id: 93, spot: "Grey's Anatomy, Ep. 1611", song: "Spotlight", artist: "Lex Junior ft. Carmen", year: "2020" },
  { id: 94, spot: "AFC Championship (2024)", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2024" },
  { id: 95, spot: "The Long Game, Ep. 101", song: "Say That Again", artist: "Book ft. Roshin", year: "2022" },
  { id: 96, spot: "Government of Ontario", song: "I Will Survive (Cover)", artist: "Book, MNDR", year: "2023" },
  { id: 97, spot: "Matchday Live - Man City v. Liverpool", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2025" },
  { id: 98, spot: "The Rookie, Ep. 714", song: "Who Want Some", artist: "Cut The Lights", year: "2025" },
  { id: 99, spot: "Sacramento Kings 2025-26 Open Video", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2025" },
  { id: 100, spot: "Onside: Major League Soccer, Ep. 104", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2025" },
  { id: 101, spot: "Murdaugh Murders Promos", song: "Sinner You Better Get Ready", artist: "BOGA", year: "2025" },
  { id: 102, spot: "2024 College Football Programming", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2024" },
  { id: 103, spot: "Special Forces: World's Toughest Test Promo", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2024" },
  { id: 104, spot: "2024 ESPYs Programming", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2024" },
  { id: 105, spot: "Guns Up", song: "Take Off", artist: "Cut The Lights", year: "2024" },
  { id: 106, spot: "Wild Cards, Ep. 201", song: "Who Want Some", artist: "Cut The Lights", year: "2025" },
  { id: 107, spot: "The Rookie, Ep. 710", song: "Run", artist: "Cut The Lights", year: "2025" },
  { id: 108, spot: "Sasha Reid and the Midnight Order S1 Promos", song: "One Way Or Another (Cover)", artist: "BOGA", year: "2024" },
  { id: 109, spot: "NFL Wildcard Promos 2024", song: "Last Man Standing", artist: "Book ft. C.S. Armstrong", year: "2024" },
  { id: 110, spot: "Anaheim Ducks: Open Video 2024/25", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2024" },
  { id: 111, spot: "Alert: Missing Persons Unit - Ep. 205", song: "Who Want Some", artist: "Cut The Lights", year: "2024" },
  { id: 112, spot: "The Underdoggs (Film)", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2023" },
  { id: 113, spot: "HUGO AW23 Campaign", song: "Body Wan Shake", artist: "Freq Motif, Magugu", year: "2023" },
  { id: 114, spot: "Robyn Hood, ep. 105", song: "I Want It All", artist: "Jazz Cartier", year: "2023" },
  { id: 115, spot: "Omnivore, Ep. 1", song: "Say That Again (Inst)", artist: "Book", year: "2023" },
  { id: 116, spot: "Shut Out (Documentary)", song: "Spotlight", artist: "Lex Junior ft. Carmen", year: "2023" },
  { id: 117, spot: "Road House (Film)", song: "Body Wan Shake", artist: "Freq Motif, Magugu", year: "2023" },
  { id: 118, spot: "EA Sports FC 24 (Video Game)", song: "Tings My Way", artist: "Freq Motif, Magugu", year: "2023" },
  { id: 119, spot: "SKODA Czech Car Ad", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2023" },
  { id: 120, spot: "Warner Brothers Discovery Up-Front Event", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 121, spot: "Welcome to Wrexham, ep. 109", song: "Don't Feed the Animals", artist: "Book ft. Roshin", year: "2022" },
  { id: 122, spot: "Boo, Bitch, ep. 106 (Netflix)", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2022" },
  { id: 123, spot: "America's Got Talent: All Stars, ep. 102", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2023" },
  { id: 124, spot: "9-1-1 Fox Promos", song: "Hold On, I'm Coming (Hit House Remix)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 125, spot: "ACC College Football Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2022" },
  { id: 126, spot: "The Recruit, ep. 102 (Netflix)", song: "Renegade", artist: "Book", year: "2022" },
  { id: 127, spot: "A Man Called Otto (Film)", song: "On The Move", artist: "Cut The Lights", year: "2022" },
  { id: 128, spot: "Killing It, Ep. 104", song: "Take It All", artist: "Thurz", year: "2022" },
  { id: 129, spot: "The Rookie, Ep. 413", song: "Run", artist: "Cut The Lights", year: "2022" },
  { id: 130, spot: "One Of Us Is Lying, ep. 201 (Peacock)", song: "Survival", artist: "Jealous Girl, Jasmine Ash", year: "2022" },
  { id: 131, spot: "Then You Run, Ep. 2", song: "Say That Again", artist: "Book ft. Roshin", year: "2022" },
  { id: 132, spot: "Basketball Wives, S10, Ep. 8", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2022" },
  { id: 133, spot: "Run The Burbs, Ep. 105", song: "Keep Moving", artist: "Moël", year: "2022" },
  { id: 134, spot: "Saturdays, ep. 104", song: "Move Around", artist: "Book ft. Bosco", year: "2023" },
  { id: 135, spot: "Chad, Ep. 202", song: "On The Move", artist: "Cut The Lights", year: "2022" },
  { id: 136, spot: "ACC ESPN Spring Football Promo", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2021" },
  { id: 137, spot: "Sportsnet 2021", song: "Spotlight", artist: "Lex Junior ft. Carmen", year: "2021" },
  { id: 138, spot: "The Rookie, ep. 409", song: "Take Off", artist: "Cut The Lights", year: "2021" },
  { id: 139, spot: "Citizens Bank Ad", song: "Move Around", artist: "Book ft. Bosco", year: "2021" },
  { id: 140, spot: "Queen of the South, Ep. BEJ501", song: "Take Off", artist: "Cut The Lights", year: "2021" },
  { id: 141, spot: "Oscar De La Hoya Spot", song: "No Pain, No Glory", artist: "Cut The Lights", year: "2021" },
  { id: 142, spot: "Kevin Hart: Zero F**ks Given Promos (Netflix)", song: "Say That Again", artist: "Book ft. Roshin", year: "2020" },
  { id: 143, spot: "War With Grandpa (Film)", song: "My World (Inst)", artist: "Book", year: "2020" },
  { id: 144, spot: "LES MILLS SPRINT 21", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2020" },
  { id: 145, spot: "NBC Generic Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2020" },
  { id: 146, spot: "Bachelorette ABC Promos", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2020" },
  { id: 147, spot: "Han Maek Korean Beer Ad", song: "Last Man Standing", artist: "Book ft. C.S. Armstrong", year: "2021" },
  { id: 148, spot: "Love Island, Ep. 232", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2020" },
  { id: 149, spot: "Self Made: Madam C.J. Walker Promos", song: "Call Me Queen", artist: "Ndidi O", year: "2020" },
  { id: 150, spot: "FX Dave Promos \"Company\"", song: "Say That Again", artist: "Book ft. Roshin", year: "2020" },
  { id: 151, spot: "Forza Horizon 5 (Video Game)", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2020" },
  { id: 152, spot: "UFC 4 (Video Game)", song: "Major Tom", artist: "Book", year: "2020" },
  { id: 153, spot: "UFC 4 (Video Game)", song: "Sphere", artist: "Book", year: "2020" },
  { id: 154, spot: "SKAM Austin, Ep. 204", song: "Move Around", artist: "Book ft. Bosco", year: "2019" },
  { id: 155, spot: "Florida Girls, Ep. 106", song: "Move Around", artist: "Book ft. Bosco", year: "2019" },
  { id: 156, spot: "America's Got Talent: The Champions Promos", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2019" },
  { id: 157, spot: "Almost Family (FOX Promo)", song: "I Feel It Coming", artist: "Pontic ft. Ndidi O", year: "2019" },
  { id: 158, spot: "SKAM Austin, Ep. 207", song: "Renegade", artist: "Book", year: "2019" },
  { id: 159, spot: "NHL '20 (Video Game)", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 160, spot: "NFL Films: 2019 The Grind (EPIX)", song: "On The Move", artist: "Cut The Lights", year: "2019" },
  { id: 161, spot: "Superstore, Ep. 5005", song: "Take Off", artist: "Cut The Lights", year: "2019" },
  { id: 162, spot: "The Weekend (Trailers)", song: "Move Around (Inst)", artist: "Book", year: "2019" },
  { id: 163, spot: "Wizard School Dropout, Ep. 112", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 164, spot: "Sunday Night Football Promos (2nd Req)", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 165, spot: "Apple Watch Ad", song: "Say That Again (Inst)", artist: "Book", year: "2019" },
  { id: 166, spot: "2018/19 NBA Studio Programming", song: "I Know I Got It", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 167, spot: "LA's Finest Promo", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 168, spot: "In The Dark, Ep. 017", song: "Druidia3.2", artist: "Book", year: "2020" },
  { id: 169, spot: "The Bold Type, Ep. 4004", song: "Introducing", artist: "Ralph", year: "2020" },
  { id: 170, spot: "GAP Ad", song: "Move Together", artist: "Ndidi O", year: "2019" },
  { id: 171, spot: "Google Stadia Promo", song: "Say That Again (Inst)", artist: "Book", year: "2019" },
  { id: 172, spot: "Kevin Hart: Irresponsible (Netflix)", song: "Take Off", artist: "Cut The Lights", year: "2019" },
  { id: 173, spot: "2018/19 NBA Studio Programming", song: "I Feel It Coming", artist: "Pontic ft. Ndidi O", year: "2019" },
  { id: 174, spot: "Bring the Funny, Ep 110", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 175, spot: "Nurses, Ep. 107", song: "Vamonos", artist: "Book ft. Haviah Mighty", year: "2019" },
  { id: 176, spot: "Xbox \"Gravity\" Trailer", song: "On The Move", artist: "Cut The Lights", year: "2019" },
  { id: 177, spot: "Grown-ish, Ep. 306", song: "Champion", artist: "Book ft. Haviah Mighty", year: "2020" },
  { id: 178, spot: "MGM 2019 Commercial", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2019" },
  { id: 179, spot: "Ally Ad", song: "Move Around (Inst)", artist: "Book", year: "2019" },
  { id: 180, spot: "World of Dance, Ep. 301", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2019" },
  { id: 181, spot: "MGM 2018 Commercial", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2018" },
  { id: 182, spot: "Insecure, Ep. 305", song: "Vamonos", artist: "Book ft. Haviah Mighty", year: "2018" },
  { id: 183, spot: "Investigation Discovery Promo (In Pursuit with John Walsh)", song: "Nowhere To Run (Cover)", artist: "BOGA", year: "2018" },
  { id: 184, spot: "MSNBC Midterm Election Promos", song: "Hold On, I'm Coming (Cover)", artist: "Book ft. Ndidi O", year: "2018" },
  { id: 185, spot: "World's Best", song: "Ready Or Not (Cover)", artist: "Book ft. Esthero", year: "2019" },
  // IMDb Film/TV Credits (Composer)
  { id: 186, spot: "Bridgit Mendler: Library (Music Video)", song: "", artist: "Composer", year: "2016" },
  { id: 187, spot: "October Gale (Film)", song: "", artist: "Composer", year: "2014" },
  { id: 188, spot: "Home Again (Film)", song: "", artist: "Composer", year: "2012" },
  { id: 189, spot: "Sounds Like a Revolution (Documentary)", song: "", artist: "Composer", year: "2010" },
  { id: 190, spot: "Dan for Mayor (TV Series)", song: "", artist: "Composer", year: "2010" },
  { id: 191, spot: "Guns (TV Mini Series)", song: "", artist: "Composer", year: "2009" },
  { id: 192, spot: "Doomstown (TV Movie)", song: "", artist: "Composer", year: "2006" },
  { id: 193, spot: "Commentary: On (Short Film)", song: "", artist: "Composer", year: "2004" },
  { id: 194, spot: "Love, Sex and Eating the Bones (Film)", song: "", artist: "Composer", year: "2003" },
];

// Get unique years sorted in descending order
const getUniqueYears = () => {
  const years = [...new Set(credits.map((c) => c.year))];
  return years.sort((a, b) => parseInt(b) - parseInt(a));
};

export function ClientList() {
  const [selectedYear, setSelectedYear] = useState<string | null>("2025");
  const [showAllYears, setShowAllYears] = useState(false);

  const years = useMemo(() => getUniqueYears(), []);
  const visibleYears = showAllYears ? years : years.slice(0, 5);

  const filteredCredits = useMemo(() => {
    if (!selectedYear) return credits;
    return credits.filter((c) => c.year === selectedYear);
  }, [selectedYear]);

  return (
    <section id="credits" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Credits
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mt-4">
            Credits
          </h2>
          <p className="text-muted-foreground mt-4">
            Film, TV, commercials, and video games
          </p>
        </motion.div>

        {/* Year filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {visibleYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                selectedYear === year
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {year}
            </button>
          ))}
          {years.length > 5 && (
            <button
              onClick={() => setShowAllYears(!showAllYears)}
              className="px-4 py-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1"
            >
              {showAllYears ? (
                <>
                  Less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  More <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </motion.div>

        {/* Credits list */}
        <div className="space-y-0">
          {filteredCredits.map((credit, index) => (
            <motion.div
              key={credit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.02, 0.3),
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group border-t border-border py-4 lg:py-5 hover:bg-secondary/30 transition-colors duration-300 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-start lg:items-center">
                {/* Spot/Project */}
                <div className="lg:col-span-5">
                  <h3 className="text-sm lg:text-base font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {credit.spot}
                  </h3>
                </div>

                {/* Song */}
                <div className="lg:col-span-3">
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    {credit.song}
                  </span>
                </div>

                {/* Artist */}
                <div className="lg:col-span-3">
                  <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {credit.artist}
                  </span>
                </div>

                {/* Year */}
                <div className="lg:col-span-1 lg:text-right">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {credit.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        {/* Results count */}
        {selectedYear && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mt-6 text-center"
          >
            Showing {filteredCredits.length} credit{filteredCredits.length !== 1 ? "s" : ""} from {selectedYear}
          </motion.p>
        )}
      </div>
    </section>
  );
}
