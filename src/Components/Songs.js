// Audio imports
import IpponSeoiNage from '../assets/audio/Ippon_Seoi_Nage.mp3';
import TaiOtoshi from '../assets/audio/Tai_Otoshi.mp3';
import YokoShihoGatame from '../assets/audio/Yoko_Shiho_Gatame.mp3';
import HidariShizentai from '../assets/audio/Hidari_Shizentai.mp3';
import MigiShizentai from '../assets/audio/Migi_Shizentai.mp3';
import OsaekomiWaza from '../assets/audio/Osaekomi_Waza.mp3';
import TachiWaza from '../assets/audio/Tachi_Waza.mp3';
import KamiShihoGatame from '../assets/audio/Kami_Shiho_Gatame.mp3';
import KumiKata from '../assets/audio/Kumi_Kata.mp3';
import NageKomi from '../assets/audio/Nage_Komi.mp3';
import MaeUkemi from '../assets/audio/Mae_Ukemi.mp3';
import OUchiGari from '../assets/audio/O_Uchi_Gari.mp3';
import TateShihoGatame from '../assets/audio/Tate_Shiho_Gatame.mp3';

// Image imports
import correctAns from '../assets/img/correct_ans.png';
import incorrectAns2 from '../assets/img/incorrect_ans_2.png';
import incorrectAns3 from '../assets/img/incorrect_ans_3.png';
import taiCorrect from '../assets/img/tai_correct.png';
import fourQuartersCorrect from '../assets/img/four_quarters_correct.png';
import lengthwiseCorrect from '../assets/img/lengthwise_correct.png';
import upperCorrect from '../assets/img/upper_correct.png';
import leftGripCorrect from '../assets/img/left_grip_correct.png';
import rightGripCorrect from '../assets/img/right_grip_correct.png';
import standingCorrect from '../assets/img/standing_correct.png';
import standingTechniqueCorrect from '../assets/img/standing_technique_correct.png';
import holdDownCorrect from '../assets/img/hold_down_correct.png';
import grippingCorrect from '../assets/img/gripping_correct.png';
import majorInnerReapingCorrect from '../assets/img/major_inner_reaping_correct.png';
import throwingCorrect from '../assets/img/throwing_correct.png';
import frontBreakfallCorrect from '../assets/img/front_breakfall_correct.png';


// Export the songs array
export const songs = [
  {
    id: 1,
    title: "Ippon Seoi Nage",
    audio: IpponSeoiNage,
    options: [
      { img: correctAns, isCorrect: true },
      { img: incorrectAns2, isCorrect: false },
      { img: incorrectAns3, isCorrect: false },
    ],
  },
  {
    id: 2,
    title: "Tai-Otoshi",
    audio: TaiOtoshi,
    options: [
      { img: correctAns, isCorrect: false },
      { img: taiCorrect, isCorrect: true },
      { img: incorrectAns2, isCorrect: false },
    ],
  },
  {
    id: 3,
    title: "Yoko Shiho Gatame",
    audio: YokoShihoGatame,
    options: [
      { img: fourQuartersCorrect, isCorrect: true },
      { img: lengthwiseCorrect, isCorrect: false },
      { img: upperCorrect, isCorrect: false },
    ],
  },
  {
    id: 4,
    title: "Hidari Shizentai",
    audio: HidariShizentai,
    options: [
      { img: leftGripCorrect, isCorrect: true },
      { img: rightGripCorrect, isCorrect: false },
      { img: standingCorrect, isCorrect: false },
    ],
  },
  {
    id: 5,
    title: "Migi Shizentai",
    audio: MigiShizentai,
    options: [
      { img: leftGripCorrect, isCorrect: false },
      { img: rightGripCorrect, isCorrect: true },
      { img: standingCorrect, isCorrect: false },
    ],
  },
  {
    id: 6,
    title: "Osaekomi-waza",
    audio: OsaekomiWaza,
    options: [
      { img: standingTechniqueCorrect, isCorrect: false },
      { img: rightGripCorrect, isCorrect: false },
      { img: holdDownCorrect, isCorrect: true },
    ],
  },
  {
    id: 7,
    title: "Tachi-waza",
    audio: TachiWaza,
    options: [
      { img: standingTechniqueCorrect, isCorrect: true },
      { img: leftGripCorrect, isCorrect: false },
      { img: holdDownCorrect, isCorrect: false },
    ],
  },
  {
    id: 8,
    title: "Kami-shiho-gatame",
    audio: KamiShihoGatame,
    options: [
      { img: fourQuartersCorrect, isCorrect: false },
      { img: lengthwiseCorrect, isCorrect: false },
      { img: upperCorrect, isCorrect: true },
    ],
  },
  {
    id: 9,
    title: "Kumi-Kata",
    audio: KumiKata,
    options: [
      { img: grippingCorrect, isCorrect: true },
      { img: leftGripCorrect, isCorrect: false },
      { img: rightGripCorrect, isCorrect: false },
    ],
  },
  {
    id: 10,
    title: "Nage-Komi",
    audio: NageKomi,
    options: [
      { img: majorInnerReapingCorrect, isCorrect: false },
      { img: throwingCorrect, isCorrect: true },
      { img: standingCorrect, isCorrect: false },
    ],
  },
  {
    id: 11,
    title: "Mae Ukemi",
    audio: MaeUkemi,
    options: [
      { img: frontBreakfallCorrect, isCorrect: true },
      { img: incorrectAns2, isCorrect: false },
      { img: incorrectAns3, isCorrect: false },
    ],
  },
  {
    id: 12,
    title: "O-uchi-gari",
    audio: OUchiGari,
    options: [
      { img: fourQuartersCorrect, isCorrect: false },
      { img: majorInnerReapingCorrect, isCorrect: true },
      { img: taiCorrect, isCorrect: false },
    ],
  },
  {
    id: 13,
    title: "Tate-shiho-gatame",
    audio: TateShihoGatame,
    options: [
      { img: lengthwiseCorrect, isCorrect: true },
      { img: fourQuartersCorrect, isCorrect: false },
      { img: upperCorrect, isCorrect: false },
    ],
  },
];

