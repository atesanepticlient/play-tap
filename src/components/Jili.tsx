/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import GameSelectionHeader from "./GameSelectionHeader";
import Link from "next/link";
import { redirect } from "next/navigation";

export const jiliGames = [
  {
    game_name: "Royal Fishing",
    game_uid: "e794bf5717aca371152df192341fe68b",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Royal-Fishing.png",
  },
  {
    game_name: "Bombing Fishing",
    game_uid: "e333695bcff28acdbecc641ae6ee2b23",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bombing-Fishing.png",
  },
  {
    game_name: "Dinosaur Tycoon",
    game_uid: "eef3e28f0e3e7b72cbca61e7924d00f1",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dinosaur-Tycoon.png",
  },
  {
    game_name: "Jackpot Fishing",
    game_uid: "3cf4a85cb6dcf4d8836c982c359cd72d",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Jackpot-Fishing.png",
  },
  {
    game_name: "Dragon Fortune",
    game_uid: "1200b82493e4788d038849bca884d773",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-Fortune.png",
  },
  {
    game_name: "Mega Fishing",
    game_uid: "caacafe3f64a6279e10a378ede09ff38",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mega-Fishing.png",
  },
  {
    game_name: "Boom Legend",
    game_uid: "f02ede19c5953fce22c6098d860dadf4",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Boom-Legend.png",
  },
  {
    game_name: "Happy Fishing",
    game_uid: "71c68a4ddb63bdc8488114a08e603f1c",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Happy-Fishing.png",
  },
  {
    game_name: "All-star Fishing",
    game_uid: "9ec2a18752f83e45ccedde8dfeb0f6a7",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/All-star-Fishing.png",
  },
  {
    game_name: "Dinosaur Tycoon II",
    game_uid: "bbae6016f79f3df74e453eda164c08a4",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dinosaur-Tycoon-II.png",
  },
  {
    game_name: "Ocean King Jackpot",
    game_uid: "564c48d53fcddd2bcf0bf3602d86c958",
    game_type: "Fish Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Ocean-King-Jackpot.png",
  },
  {
    game_name: "Chin Shi Huang",
    game_uid: "24da72b49b0dd0e5cbef9579d09d8981",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Chin-Shi-Huang.png",
  },
  {
    game_name: "God Of Martial",
    game_uid: "21ef8a7ddd39836979170a2e7584e333",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/God-Of-Martial.png",
  },
  {
    game_name: "Hot Chilli",
    game_uid: "c845960c81d27d7880a636424e53964d",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Hot-Chilli.png",
  },
  {
    game_name: "Fortune Tree",
    game_uid: "6a7e156ceec5c581cd6b9251854fe504",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Tree.png",
  },
  {
    game_name: "War Of Dragons",
    game_uid: "4b1d7ffaf9f66e6152ea93a6d0e4215b",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/War-Of-Dragons.png",
  },
  {
    game_name: "Gem Party",
    game_uid: "756cf3c73a323b4bfec8d14864e3fada",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Gem-Party.png",
  },
  {
    game_name: "Lucky Ball",
    game_uid: "893669898cd25d9da589a384f1d004df",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Ball.png",
  },
  {
    game_name: "Hyper Burst",
    game_uid: "a47b17970036b37c1347484cf6956920",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Hyper-Burst.png",
  },
  {
    game_name: "Shanghai Beauty",
    game_uid: "795d0cae623cbf34d7f1aa93bbcded28",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Shanghai-Beauty.png",
  },
  {
    game_name: "Fa Fa Fa",
    game_uid: "54c41adcf43fdb6d385e38bc09cd77ca",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fa-Fa-Fa.png",
  },
  {
    game_name: "Candy Baby",
    game_uid: "2cc3b68cbcfacac2f7ef2fe19abc3c22",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Candy-Baby.png",
  },
  {
    game_name: "Hawaii Beauty",
    game_uid: "6409b758471b6df30c6b137b49f4d92e",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Hawaii-Beauty.png",
  },
  {
    game_name: "SevenSevenSeven",
    game_uid: "61d46add6841aad4758288d68015eca6",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/SevenSevenSeven.png",
  },
  {
    game_name: "Bubble Beauty",
    game_uid: "a78d2ed972aab8ba06181cc43c54a425",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bubble-Beauty.png",
  },
  {
    game_name: "FortunePig",
    game_uid: "8488c76ee2afb8077fbd7eec62721215",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/FortunePig.png",
  },
  {
    game_name: "Crazy777",
    game_uid: "8c62471fd4e28c084a61811a3958f7a1",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy777.png",
  },
  {
    game_name: "Bao boon chin",
    game_uid: "8c4ebb3dc5dcf7b7fe6a26d5aadd2c3d",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bao-boon-chin.png",
  },
  {
    game_name: "Night City",
    game_uid: "78e29705f7c6084114f46a0aeeea1372",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Night-City.png",
  },
  {
    game_name: "Fengshen",
    game_uid: "09699fd0de13edbb6c4a194d7494640b",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fengshen.png",
  },
  {
    game_name: "Crazy FaFaFa",
    game_uid: "a57a8d5176b54d4c825bd1eee8ab34df",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-FaFaFa.png",
  },
  {
    game_name: "XiYangYang",
    game_uid: "5a962d0e31e0d4c0798db5f331327e4f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/XiYangYang.png",
  },
  {
    game_name: "DiamondParty",
    game_uid: "48d598e922e8c60643218ccda302af08",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/DiamondParty.png",
  },
  {
    game_name: "Golden Bank",
    game_uid: "c3f86b78938eab1b7f34159d98796e88",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Bank.png",
  },
  {
    game_name: "Dragon Treasure",
    game_uid: "c6955c14f6c28a6c2a0c28274fec7520",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-Treasure.png",
  },
  {
    game_name: "Charge Buffalo",
    game_uid: "984615c9385c42b3dad0db4a9ef89070",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Charge-Buffalo.png",
  },
  {
    game_name: "Lucky Goldbricks",
    game_uid: "d84ef530121953240116e3b2e93f6af4",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Goldbricks.png",
  },
  {
    game_name: "Super Ace",
    game_uid: "bdfb23c974a2517198c5443adeea77a8",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Ace.png",
  },
  {
    game_name: "Money Coming",
    game_uid: "db249defce63610fccabfa829a405232",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Money-Coming.png",
  },
  {
    game_name: "Golden Queen",
    game_uid: "8de99455c2f23f6827666fd798eb80ef",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Queen.png",
  },
  {
    game_name: "Jungle King",
    game_uid: "4db0ec24ff55a685573c888efed47d7f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Jungle-King.png",
  },
  {
    game_name: "Monkey Party",
    game_uid: "fd369a4a7486ff303beea267ec5c8eff",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Monkey-Party.png",
  },
  {
    game_name: "Boxing King",
    game_uid: "981f5f9675002fbeaaf24c4128b938d7",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Boxing-King.png",
  },
  {
    game_name: "Secret Treasure",
    game_uid: "1d1f267e3a078ade8e5ccd56582ac94f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Secret-Treasure.png",
  },
  {
    game_name: "Pharaoh Treasure",
    game_uid: "c7a69ab382bd1ff0e6eb65b90a793bdd",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pharaoh-Treasure.png",
  },
  {
    game_name: "Lucky Coming",
    game_uid: "ba858ec8e3b5e2b4da0d16b3a2330ca7",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Coming.png",
  },
  {
    game_name: "Super Rich",
    game_uid: "b92f491a63ac84b106b056e9d46d35c5",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Rich.png",
  },
  {
    game_name: "RomaX",
    game_uid: "e5ff8e72418fcc608d72ea21cc65fb70",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/RomaX.png",
  },
  {
    game_name: "Golden Empire",
    game_uid: "490096198e28f770a3f85adb6ee49e0f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Empire.png",
  },
  {
    game_name: "Fortune Gems",
    game_uid: "a990de177577a2e6a889aaac5f57b429",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Gems.png",
  },
  {
    game_name: "Crazy Hunter",
    game_uid: "69082f28fcd46cbfd10ce7a0051f24b6",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-Hunter.png",
  },
  {
    game_name: "Party Night",
    game_uid: "d505541d522aa5ca01fc5e97cfcf2116",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Party-Night.png",
  },
  {
    game_name: "Magic Lamp",
    game_uid: "582a58791928760c28ec4cef3392a49f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Magic-Lamp.png",
  },
  {
    game_name: "Agent Ace",
    game_uid: "8a4b4929e796fda657a2d38264346509",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Agent-Ace.png",
  },
  {
    game_name: "TWIN WINS",
    game_uid: "c74b3cbda5d16f77523e41c25104e602",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TWIN-WINS.png",
  },
  {
    game_name: "Ali Baba",
    game_uid: "cc686634b4f953754b306317799f1f39",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Ali-Baba.png",
  },
  {
    game_name: "Mega Ace",
    game_uid: "eba92b1d3abd5f0d37dfbe112abdf0e2",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mega-Ace.png",
  },
  {
    game_name: "Medusa",
    game_uid: "2c17b7c4e2ce5b8bebf4bd10e3e958d7",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Medusa.png",
  },
  {
    game_name: "Book of Gold",
    game_uid: "6b283c434fd44250d83b7c2420f164f9",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Book-of-Gold.png",
  },
  {
    game_name: "Thor X",
    game_uid: "7e6aa773fa802aaa9cb1f2fac464736e",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Thor-X.png",
  },
  {
    game_name: "Happy Taxi",
    game_uid: "1ed896aae4bdc78c984021307b1dd177",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Happy-Taxi.png",
  },
  {
    game_name: "Gold Rush",
    game_uid: "2a5d731e0fd60f52873a24ece11f2c0b",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Gold-Rush.png",
  },
  {
    game_name: "Mayan Empire",
    game_uid: "5c2383ef253f9c36dacec4b463d61622",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mayan-Empire.png",
  },
  {
    game_name: "Crazy Pusher",
    game_uid: "00d92d5cec10cf85623938222a6c2bb6",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-Pusher.png",
  },
  {
    game_name: "Bone Fortune",
    game_uid: "aab3048abc6a88e0759679fbe26e6a8d",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bone-Fortune.png",
  },
  {
    game_name: "JILI CAISHEN",
    game_uid: "11e330c2b23f106815f3b726d04e4316",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/JILI-CAISHEN.png",
  },
  {
    game_name: "Bonus Hunter",
    game_uid: "39775cdc4170e56c5f768bdee8b4fa00",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bonus-Hunter.png",
  },
  {
    game_name: "World Cup",
    game_uid: "28374b7ad7c91838a46404f1df046e5a",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/World-Cup.png",
  },
  {
    game_name: "Samba",
    game_uid: "6d35789b2f419c1db3926350d57c58d8",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Samba.png",
  },
  {
    game_name: "Neko Fortune",
    game_uid: "9a391758f755cb30ff973e08b2df6089",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Neko-Fortune.png",
  },
  {
    game_name: "Wild Racer",
    game_uid: "2f0c5f96cda3c6e16b3929dd6103df8e",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wild-Racer.png",
  },
  {
    game_name: "Pirate Queen",
    game_uid: "70999d5bcf2a1d1f1fb8c82e357317f4",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pirate-Queen.png",
  },
  {
    game_name: "Golden Joker",
    game_uid: "f301fe0b22d1540b1f215d282b20c642",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Joker.png",
  },
  {
    game_name: "Wild Ace",
    game_uid: "9a3b65e2ae5343df349356d548f3fc4b",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wild-Ace.png",
  },
  {
    game_name: "Master Tiger",
    game_uid: "d2b48fe98ac2956eeefd2bc4f7e0335a",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Master-Tiger.png",
  },
  {
    game_name: "Fortune Gems 2",
    game_uid: "664fba4da609ee82b78820b1f570f4ad",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Gems-2.png",
  },
  {
    game_name: "Sweet Land",
    game_uid: "91250a55f75a3c67ed134b99bf587225",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sweet-Land.png",
  },
  {
    game_name: "Cricket King 18",
    game_uid: "dcf220f4e3ecca0278911a55e6f11c77",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Cricket-King-18.png",
  },
  {
    game_name: "Elf Bingo",
    game_uid: "5cec2b309a8845b38f8e9b4e6d649ea2",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Elf-Bingo.png",
  },
  {
    game_name: "Cricket Sah 75",
    game_uid: "6720a0ce1d06648ff390fbea832798a9",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Cricket-Sah-75.png",
  },
  {
    game_name: "Golden Temple",
    game_uid: "976c5497256c020ac012005f6bb166ad",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Temple.png",
  },
  {
    game_name: "Devil Fire",
    game_uid: "1b4c5865131b4967513c1ee90cba4472",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Devil-Fire.png",
  },
  {
    game_name: "Bangla Beauty",
    game_uid: "6b60d159f0939a45f7b4c88a9b57499a",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bangla-Beauty.png",
  },
  {
    game_name: "Aztec Priestess",
    game_uid: "6acff19b2d911a8c695ba24371964807",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Aztec-Priestess.png",
  },
  {
    game_name: "Fortune Monkey",
    game_uid: "add95fc40f1ef0d56f5716ce45a56946",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Monkey.png",
  },
  {
    game_name: "Dabanggg",
    game_uid: "5404a45b06826911c3537fdf935c281f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dabanggg.png",
  },
  {
    game_name: "Sin City",
    game_uid: "830cac2f5da6cc1fb91cfae04b85b1e2",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sin-City.png",
  },
  {
    game_name: "King Arthur",
    game_uid: "fafab1a17a237d0fc0e50c20d2c2bf4c",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/King-Arthur.png",
  },
  {
    game_name: "Charge Buffalo Ascent",
    game_uid: "28bc4a33c985ddce6acd92422626b76f",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Charge-Buffalo-Ascent.png",
  },
  {
    game_name: "Witches Night",
    game_uid: "82c5c404cf4c0790deb42a2b5653533c",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Witches-Night.png",
  },
  {
    game_name: "Fairness Games(BlockLobby)",
    game_uid: "1ab8d0997624c05e4aee901af1bf84dc",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fairness-Games(BlockLobby).png",
  },
  {
    game_name: "Dragon & Tiger",
    game_uid: "dc76761a9dd2b423da6df25a6b65eab1",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-&-Tiger.png",
  },
  {
    game_name: "Dice",
    game_uid: "1f3869a4761544f68ce8c9ff04c18adf",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dice.png",
  },
  {
    game_name: "7 UP-DOWN",
    game_uid: "f897d3bfa4061b602cd0ce1d1ea88312",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/7-UP-DOWN.png",
  },
  {
    game_name: "Lucky Number",
    game_uid: "f4bfb9bbf261541bc42889fe2da7f281",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Number.png",
  },
  {
    game_name: "Big Small",
    game_uid: "25822eb4d6459cc8b39c4f7b69b1bf2c",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Big-Small.png",
  },
  {
    game_name: "Number King",
    game_uid: "36d20c24669dca7630715f2e0a7c18be",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Number-King.png",
  },
  {
    game_name: "Journey West M",
    game_uid: "0d0a5a1731a6a05ffeb0e0f9d1948f80",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Journey-West-M.png",
  },
  {
    game_name: "Poker King",
    game_uid: "a9b13010273fcb0284c9ef436c5fe2ff",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Poker-King.png",
  },
  {
    game_name: "Dragon & Tiger",
    game_uid: "e7ac92d2fdd2aedca92a3521b4416f47",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-&-Tiger.png",
  },
  {
    game_name: "iRich Bingo",
    game_uid: "a53e46bf1e31f7a960ae314dc188e8b3",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/iRich-Bingo.png",
  },
  {
    game_name: "7up7down",
    game_uid: "3aca3084a5c1a8c77c52d6147ee3d2ab",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/7up7down.png",
  },
  {
    game_name: "Baccarat",
    game_uid: "b9c7c5f589cdaa63c4495e69eaa6dbbf",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Baccarat.png",
  },
  {
    game_name: "Fortune Bingo",
    game_uid: "2fd70535a3c838a438b4b8003ecce49d",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Bingo.png",
  },
  {
    game_name: "Sic Bo",
    game_uid: "de0dc8a7fd369bd39a2d5747be87825c",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sic-Bo.png",
  },
  {
    game_name: "Super Bingo",
    game_uid: "c934e67c2a84f52ef4fb598b56f3e7ba",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Bingo.png",
  },
  {
    game_name: "Bingo Carnaval",
    game_uid: "d419ec9ab6a23590770fd77b036aed16",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bingo-Carnaval.png",
  },
  {
    game_name: "Win Drop",
    game_uid: "8211bc6e55e84d266bef9a6960940183",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Win-Drop.png",
  },
  {
    game_name: "Lucky Bingo",
    game_uid: "c9f2470e285f3580cd761ba2e1f067e1",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Bingo.png",
  },
  {
    game_name: "Jackpot Bingo",
    game_uid: "780d43c0a98bc8f6a0705976605608c3",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Jackpot-Bingo.png",
  },
  {
    game_name: "Color Game",
    game_uid: "2ac4917fbc8b2034307b0c3cdd90d416",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Color-Game.png",
  },
  {
    game_name: "Go Goal BIngo",
    game_uid: "4e5ddaa644badc5f68974a65bf7af02a",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Go-Goal-BIngo.png",
  },
  {
    game_name: "Calaca Bingo",
    game_uid: "b2f05dae5370035a2675025953d1d115",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Calaca-Bingo.png",
  },
  {
    game_name: "PAPPU",
    game_uid: "e5091890bbb65a5f9ceb657351fa73c1",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/PAPPU.png",
  },
  {
    game_name: "West Hunter Bingo",
    game_uid: "8d2c1506dc4ae4c47d23f9359d71c360",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/West-Hunter-Bingo.png",
  },
  {
    game_name: "Bingo Adventure",
    game_uid: "2303867628a9a62272da7576665bbc65",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bingo-Adventure.png",
  },
  {
    game_name: "Golden Land",
    game_uid: "05fc951a633d4c6b4bbe8c429cd63658",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Land.png",
  },
  {
    game_name: "Candyland Bingo",
    game_uid: "711acbdf297ce40a09dd0e9023b63f50",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Candyland-Bingo.png",
  },
  {
    game_name: "Color Prediction",
    game_uid: "4a64504353c2304a3061bfd31cd9a62e",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Color-Prediction.png",
  },
  {
    game_name: "Magic Lamp Bingo",
    game_uid: "848ac1703885d5a86b54fbbf094b3b63",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Magic-Lamp-Bingo.png",
  },
  {
    game_name: "Pearls of Bingo",
    game_uid: "0995142f4685f66dfdd1a54fffa66ffa",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pearls-of-Bingo.png",
  },
  {
    game_name: "European Roulette",
    game_uid: "d4fc911a31b3a61edd83bdd95e36f3bf",
    game_type: "Table Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/European-Roulette.png",
  },
  {
    game_name: "Go Rush",
    game_uid: "edef29b5eda8e2eaf721d7315491c51d",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Go-Rush.png",
  },
  {
    game_name: "Mines",
    game_uid: "72ce7e04ce95ee94eef172c0dfd6dc17",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mines.png",
  },
  {
    game_name: "Tower",
    game_uid: "8e939551b9e785001fcb5b0a32f88aba",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Tower.png",
  },
  {
    game_name: "HILO",
    game_uid: "bd8a2bb2dd63503b93cf6ac9492786ce",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/HILO.png",
  },
  {
    game_name: "Limbo",
    game_uid: "eabf08253165b6bb2646e403de625d1a",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Limbo.png",
  },
  {
    game_name: "Wheel",
    game_uid: "6e19e03c50f035ddd9ffd804c30f8c80",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wheel.png",
  },
  {
    game_name: "Mines Gold",
    game_uid: "4bceeb28b1a88c87d1ef518d7af2bba9",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mines-Gold.png",
  },
  {
    game_name: "Keno",
    game_uid: "a54e3f5e231085c7d8ba99e8ed2261fc",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Keno.png",
  },
  {
    game_name: "Plinko",
    game_uid: "e3b71c6844eb8c30f5ef210ad92725a6",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Plinko.png",
  },
  {
    game_name: "Crash Bonus",
    game_uid: "a7f3e5f210523a989a7c6b32f2f1ad42",
    game_type: "Crash Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crash-Bonus.png",
  },
  {
    game_name: "TeenPatti",
    game_uid: "f743cb55c2c4b737727ef144413937f4",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti.png",
  },
  {
    game_name: "AK47",
    game_uid: "488c377662cad37a551bde18e2fbe785",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/AK47.png",
  },
  {
    game_name: "Andar Bahar",
    game_uid: "6f48b3aa0b64c79a2dc320ea021148b5",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Andar-Bahar.png",
  },
  {
    game_name: "Rummy",
    game_uid: "ae632f32c3a1e6803f9a6fbec16be28e",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Rummy.png",
  },
  {
    game_name: "Callbreak",
    game_uid: "9092b5a56e001c60850c4c1184c53e07",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Callbreak.png",
  },
  {
    game_name: "TeenPatti Joker",
    game_uid: "1a4eaca67612e65fdcae43f4c8a667a4",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti-Joker.png",
  },
  {
    game_name: "Callbreak Quick",
    game_uid: "aa9a9916d6e48ba50afa3c2246b6dacb",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Callbreak-Quick.png",
  },
  {
    game_name: "TeenPatti 20-20",
    game_uid: "1afa7db588d05de7b9abca4664542765",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti-20-20.png",
  },
  {
    game_name: "Ludo Quick",
    game_uid: "bb1f14d788d37b06dc8f6701ed57ed0d",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Ludo-Quick.png",
  },
  {
    game_name: "Tongits Go",
    game_uid: "26fbfab92a3837b7dbf767e783b173af",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Tongits-Go.png",
  },
  {
    game_name: "Pusoy Go",
    game_uid: "f2879a3f20f305eadad13448e11c052e",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pusoy-Go.png",
  },
  {
    game_name: "Blackjack",
    game_uid: "3b502aee6c9e1ef0f698332ee1b76634",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Blackjack.png",
  },
  {
    game_name: "Blackjack Lucky Ladies",
    game_uid: "d0d1c20062e28493e1750f27a1730c48",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Blackjack-Lucky-Ladies.png",
  },
  {
    game_name: "MINI FLUSH",
    game_uid: "07afefc388ab6af8cf26f85286f83fae",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/MINI-FLUSH.png",
  },
  {
    game_name: "Pool Rummy",
    game_uid: "43e7df819bf57722a8917bb328640b30",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pool-Rummy.png",
  },
  {
    game_name: "Caribbean Stud Poker",
    game_uid: "04c9784b0b1b162b2c86f9ce353da8b7",
    game_type: "India Poker Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Caribbean-Stud-Poker.png",
  },
  {
    game_name: "Fortune Gems 3",
    game_uid: "63927e939636f45e9d6d0b3717b3b1c1",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune Gems 3.jpg",
  },
  {
    game_name: "Super Ace Deluxe",
    game_uid: "80aad2a10ae6a95068b50160d6c78897",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super Ace Deluxe.jpg",
  },
  {
    game_name: "3 Coin Treasures",
    game_uid: "69c1b4586b5060eefcb45bb479f03437",
    game_type: "Slot Game",
    icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/3 Coin Treasures.png",
  },
];

const Jili = () => {
  const gamesContainer = useRef<HTMLDivElement | null>(null);

  const handleRightButtonClick = () => {
    gamesContainer.current!.scrollLeft += -130;
  };
  const handleLeftButtonClick = () => {
    gamesContainer.current!.scrollLeft += 130;
  };
  return (
    <div>
      <div
        className="my-4"
        style={{
          width: "100%",
        }}
      >
        <GameSelectionHeader
          title="Jili "
          leftAction={handleLeftButtonClick}
          rightAction={handleRightButtonClick}
          seeAction={() => redirect("/jilli")}
        />
        <div
          className="max-w-full w-full overflow-x-auto scrollbar-none scroll-smooth"
          ref={gamesContainer}
        >
          <div className="hot-games-list">
            {[
              {
                game_name: "Super Ace",
                game_uid: "bdfb23c974a2517198c5443adeea77a8",
                game_type: "Slot Game",
                icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Ace.png",
              },
              {
                game_name: "Money Coming",
                game_uid: "db249defce63610fccabfa829a405232",
                game_type: "Slot Game",
                icon: "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Money-Coming.png",
              },
              ...jiliGames.slice(0, 18),
            ].map((game, i) => (
              <JiliGame game={game} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jili;

export const JiliGame = ({
  game,
}: {
  game: {
    game_name: string;
    game_uid: string;
    game_type: string;
    icon: string;
  };
}) => {
  return (
    <Link href={"#"} className="bg-[#003840] p-2 rounded-md">
      <img src={game.icon} alt="sports" />
      <span className="block text-center text-sm text-white py-2">
        {game.game_name}
      </span>
    </Link>
  );
};
