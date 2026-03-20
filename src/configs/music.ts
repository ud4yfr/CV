import type { MusicData } from "~/types";

const base = import.meta.env.BASE_URL;

const music: MusicData = {
  title: "液体 Netizen",
  artist: "Webinar™",
  cover: `${base}img/ui/webinar-cover.jpg`,
  audio: `${base}music/webinar.mp3`
};

export default music;
