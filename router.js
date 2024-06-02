const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.dasarHukum"), [BotController, "dasarHukum"]);
router.menu(f("menu.DH1"), [BotController, "dasarHukumSatu"]);
router.menu(f("menu.DH2"), [BotController, "dasarHukumDua"]);
router.menu(f("menu.DH3"), [BotController, "dasarHukumTiga"]);
router.menu(f("menu.DH4"), [BotController, "dasarHukumEmpat"]);
router.menu(f("menu.DH5"), [BotController, "dasarHukumLima"]);
router.menu(f("menu.DH6"), [BotController, "dasarHukumEnam"]);
router.menu(f("menu.DH7"), [BotController, "dasarHukumTujuh"]);
router.menu(f("menu.DH8"), [BotController, "dasarHukumDelapan"]);
router.menu(f("menu.DH9"), [BotController, "dasarHukumSembilan"]);
router.menu(f("menu.DH10"), [BotController, "dasarHukumSepuluh"]);
router.menu(f("menu.DH11"), [BotController, "dasarHukumSebelas"]);
router.menu(f("menu.DH12"), [BotController, "dasarHukumDuaBelas"]);

// router.menu(f("menu.tataTempat"), [BotController, "tataTempat"]);
// router.menu(f("menu.TT1"), [BotController, "fkpJateng"]);
// router.menu(f("menu.TT2"), [BotController, "tataTempatDoc"]);
router.menu(f("menu.tataTempat"), [BotController, "tataTempatDoc"]);
router.menu(f("menu.FKP1"), [BotController, "fkpJatengSatu"]);
router.menu(f("menu.FKP2"), [BotController, "fkpJatengDua"]);
router.menu(f("menu.FKP3"), [BotController, "fkpJatengTiga"]);
router.menu(f("menu.FKP4"), [BotController, "fkpJatengEmpat"]);
router.menu(f("menu.FKP5"), [BotController, "fkpJatengLima"]);

router.menu(f("menu.tataUpacara"), [BotController, "tataUpacara"]);

router.menu(f("menu.tataPenghormatan"), [BotController, "tataPenghormatan"]);

router.menu(f("menu.kegiatanKeprotokolan"), [
  BotController,
  "kegiatanKeprotokolan",
]);

router.menu(f("menu.pejabatPertama"), [BotController, "pejabatPertama"]);

router.menu(f("menu.bupatiWalikota"), [BotController, "bupatiWalikota"]);

router.menu(f("menu.perjanjianKerjasama"), [
  BotController,
  "perjanjianKerjasama",
]);

router.menu(f("menu.peresmian"), [BotController, "peresmian"]);

router.menu(f("menu.kunjunganKerja"), [BotController, "kunjunganKerja"]);

router.menu(f("menu.kontakADC"), [BotController, "kontakADC"]);
router.menu(f("menu.ADC1"), [BotController, "kontakADCSatu"]);
router.menu(f("menu.ADC2"), [BotController, "kontakADCDua"]);
router.menu(f("menu.ADC3"), [BotController, "kontakADCTiga"]);
router.menu(f("menu.ADC4"), [BotController, "kontakADCEmpat"]);
router.menu(f("menu.ADC5"), [BotController, "kontakADCLima"]);
router.menu(f("menu.ADC6"), [BotController, "kontakADCEnam"]);

router.menu(f("menu.pleacing"), [BotController, "pleacing"]);
router.menu(f("menu.P1"), [BotController, "pleacingSatu"]);
router.menu(f("menu.P2"), [BotController, "pleacingDua"]);
router.menu(f("menu.P3"), [BotController, "pleacingTiga"]);
router.menu(f("menu.P4"), [BotController, "pleacingEmpat"]);

router.keyword("info", [BotController, "introduction"]);

module.exports = router;
