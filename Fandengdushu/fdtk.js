/*
https://raw.githubusercontent.com/WeiGiegie/666/main/fdtk.js
帆@书 解锁樊登讲书+课程
5.89.0
2024+

[rewrite_local]
^https?:\/\/.+dushu365.com\/(sns-orchestration-system\/homePage\/api\/v100\/myPage|smart-orch\/program) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/fdds.js
^https?:\/\/.+dushu365.com\/resource-orchestration-system\/book\/v101\/content url script-request-body https://raw.githubusercontent.com/WeiGiegie/666/main/fdtk.js


[mitm]
hostname = *.dushu365.com,gw2.dushu365.com,gw1.dushu365.com
*/

['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"102Y117J110b99R116a105x111x110o32T98M97d115n101x54x52Z68p101Y99x111c100Z101a40R105x110D112u117y116B41J32k123C10S32M32c32C32j99q111h110h115F116a32Y99g104i97D114I115g32V61v32f39j65s66v67j68l69r70w71V72A73e74h75y76Y77O78V79W80m81R82f83r84L85v86a87L88f89J90w97z98m99p100i101X102A103U104H105Y106R107U108l109D110p111v112y113W114f115k116d117u118V119L120X121x122o48s49n50z51h52v53x54Q55N56M57f43V47O61U39f59x10w32J32z32u32j108o101h116C32J115Z116C114H32U61u32P83D116G114a105i110x103w40M105y110g112I117z116o41U46s114R101W112J108P97l99L101a40L47O61i43w36H47p44n32J39E39t41W59L10v32j32H32S32G108q101g116b32A98x105s110k97L114S121z83e116F114z32v61Q32F39Y39x59u10v32Z32R32C32n105W102t32z40S115d116R114A46b108d101J110b103J116P104M32M37d32N52o32q61p61I61p32B49s41q32S123j10y32F32d32c32s32N32S32q32T116T104x114l111k119T32a110d101w119R32C69a114R114g111e114e40g39z73G110p118s97C108g105d100l32K98U97w115x101B54i52X32m115v116I114z105f110G103U39N41d59p10N32A32L32g32d125s10i32j32C32F32b102N111O114W32Z40t10a32p32D32y32B32T32Z32Z32B108T101N116Y32y98g99l32l61l32M48p44d32h98m115u44L32U98L117n102l102J101K114O44m32a105u100N120L32F61H32M48R59V32D98b117X102K102M101Q114U32g61W32w115f116D114j46b99i104V97L114s65i116A40C105C100M120I43x43f41Q59l32n126T98w117k102z102Q101y114F32I38T38v10Z32w32p32g32V32D32W32V32S40Z98K115h32d61N32F98G99Z32T37K32W52C32b63H32w98S115k32R42T32m54U52x32h43S32n98o117Z102m102E101R114p32B58t32k98z117D102F102G101X114L44H10I32u32v32q32C32f32D32B32G32P32w32w32i98f99q43f43d32h37y32A52j41e32W63M32C98o105u110V97B114G121G83T116J114L32N43o61S32a83F116d114X105U110c103F46w102U114W111j109T67P104K97h114p67x111x100t101o40v50C53o53c32x38w32V98t115q32z62j62Q32j40O45F50z32j42F32V98J99L32e38G32a54o41w41h32W58D32U48C10H32N32F32E32G41P32h123h10z32V32K32t32i32m32o32b32J98g117W102W102x101S114K32v61L32a99Q104u97j114M115t46i105n110V100Q101R120q79r102m40W98O117L102H102V101J114z41K59s10w32d32R32d32f125D10K32Z32B32g32W114i101q116C117D114j110O32x98L105H110p97w114g121W83o116m114i59Z10e125d10a102a117s110F99I116Y105s111A110t32e98l97B115f101B54B52B69M110D99R111D100V101W40n105f110P112u117v116K41j32P123D10R32b32o32h32F99E111H110H115M116a32t99F104W97W114W115K32f61P32x39Y65i66E67S68Q69h70O71h72p73k74q75D76V77f78I79S80e81q82t83Z84Q85D86s87w88x89b90W97Q98A99e100h101F102h103J104m105d106F107L108U109w110u111X112v113r114a115I116Z117B118u119h120v121b122p48t49Z50v51a52J53P54l55r56y57l43w47y61x39E59i10s32g32g32B32v108m101l116N32T115T116j114E32E61C32S83j116t114R105N110v103W40X105N110s112N117F116Y41Y59k10L32C32z32t32E108d101C116e32c111B117e116A112l117X116C32a61b32I39l39g59m10U32r32Q32R32J102U111i114y32n40w10u32b32k32K32L32Y32q32o32u108N101i116F32y98U108T111X99Z107k44V32G99y104h97Q114B67L111w100m101M44e32b105t100I120O32c61W32n48m44d32t109v97P112R32R61T32H99M104i97O114R115Y59d32R115y116n114H46X99t104J97O114J65e116w40L105h100c120C32w124p32q48X41D32M124D124j32P40J109y97M112z32g61A32s39k61r39w44L32z105b100B120W32J37R32A49n41c59X32D111Z117i116g112A117i116q32w43X61o32t109G97r112e46m99S104S97G114V65Y116g40M54u51S32U38U32c98t108r111z99Z107h32Y62C62E32s56Q32j45n32E105T100q120Q32A37n32S49Q32S42F32j56M41U10J32h32c32F32a41t32x123f10v32h32P32H32b32g32o32o32t99r104r97u114y67D111O100D101t32S61V32a115i116i114u46l99m104F97Y114n67Y111M100O101c65A116V40n105V100a120M32B43o61I32A51R32k47B32v52B41b59W10a32t32s32X32k32E32w32Y32h105V102W32n40F99h104m97u114a67o111r100d101U32h62b32i48f120j70O70W41R32r123P10P32C32g32d32J32i32f32R32t32U32t32W32r116L104l114u111R119C32a110N101e119B32i69G114Y114B111W114V40s34W39b98D116W111d97u39Q32U102t97a105H108p101g100Z58u32u84u104F101E32D115a116S114k105X110O103h32H116b111z32L98o101x32N101F110O99H111b100S101v100C32e99d111v110F116b97W105S110r115I32Q99X104z97j114R97u99L116H101i114V115d32M111y117c116Y115F105K100j101U32z111h102D32H116f104v101C32b76t97L116z105i110Z49W32z114y97y110R103A101D46x34D41k59S10a32E32P32u32B32d32N32N32u125S10y32K32W32R32U32L32y32C32u98t108F111k99T107q32t61o32l98a108Q111w99V107b32N60O60j32t56s32x124u32d99t104O97M114V67y111V100J101o59z10g32O32O32c32o125y10G32Q32e32j32X114V101H116U117s114K110p32e111Y117T116C112l117n116X59K10z125h10H10F108j101B116A32H117v114C108T32Q61s32I36h114Q101O113B117B101z115m116Q46x117L114S108b59w10Y108U101V116J32X98j111X100j121D32U61Q32i36G114H101G113k117N101B115a116a46b98t111R100X121B59D10k108y101b116V32I98a105i110X97A114E121O83e116d114U105a110d103b32I61V32J98U97r115m101x54A52s68n101G99V111B100B101d40p98Y111r100k121r41z59z10U108L101u116r32P98O121e116z101c115w32P61f32U110J101r119f32W85s105J110x116b56P65Q114J114Q97W121i40B98k105x110S97L114J121Z83S116B114B105D110d103f46j108r101g110D103K116Y104M41F59t10f102a111f114A32Q40f108G101Z116w32k105f32Y61U32y48w59b32Z105Y32v60Y32U98H105Q110N97S114D121C83X116I114w105k110d103p46O108Q101D110G103h116A104h59V32S105t43T43b41c32l123k10U32H32N32M32I98U121f116U101j115o91y105c93R32W61w32p98F105e110x97W114c121Y83y116f114i105A110P103X46r99W104b97b114G67c111H100D101l65t116L40U105o41X59e10Q125t10W10q108X101v116Z32y100c101g99x111c100s101y100p68s97b116E97T32i61n32q110a101D119F32E84J101B120H116w68f101a99R111J100p101f114t40O39b117i116W102P45R56t39k41O46t100v101n99X111g100x101h40g98J121m116Z101U115v41O59u10j108Z101G116v32D106t115U111c110R68v97i116A97w32h61z32s74b83I79N78z46T112M97N114L115K101V40q100e101N99G111R100z101n100H68p97K116Q97i41S59D10G10f10U105A102P32P40K117a114m108b46x105Z110H99f108O117w100H101G115k40N34r47G114T101F115V111T117t114A99J101a45L111o114K99s104j101T115C116L114L97J116w105y111A110o45w115E121m115y116P101K109m47w98O111K111L107L47C118F49n48s49K47E99Z111e110l116M101Q110Y116d34X41B41r32D123r10I32f32F32Y32Z106y115G111X110P68C97K116C97L46Y116V111b107X101P110t32N61d32D34n50x48t50D52n48a55a48D50R110t84G118j55s90s115p70Y87O114Q113s77L82o113n107G101W112m67T88d71M34g59t10g125Y32k10B10M10G108Z101O116Z32y109A111d100c105P102e105K101q100b68O97g116y97Z83Z116D114G105j110X103a32t61T32J74f83y79f78r46p115N116o114L105t110Y103Y105s102Q121g40h106S115T111X110S68Z97w116t97x41a59G10C108Y101M116c32o109v111R100i105p102R105o101f100F68R97S116O97s66D121Z116g101a115Q32t61x32D110o101B119I32A84O101D120a116f69i110p99X111P100z101F114h40k41m46F101M110M99w111H100t101S40y109o111j100z105y102V105g101I100H68U97l116f97A83Y116y114l105J110w103L41A59w10b108E101o116d32n109I111r100V105i102O105C101o100t68o97c116Q97C66E105z110M97m114E121S83Y116c114o105m110j103p32K61C32g39c39v59l10B102W111B114C32m40Z108Z101c116m32Z105u32H61g32l48V59U32s105W32T60k32T109j111F100I105n102j105P101K100L68S97Q116z97H66v121k116O101O115g46f108b101e110y103h116Z104a59s32E105r43d43U41B32I123O10h32Q32d32a32B109n111i100A105j102c105r101L100Y68C97I116t97V66o105D110m97i114K121X83F116D114L105A110U103c32A43j61z32Z83E116N114H105e110p103L46I102p114t111w109k67j104h97R114h67G111n100i101n40t109J111k100y105y102e105e101w100w68f97d116j97s66g121R116Z101I115J91i105n93Z41l59S10s125N10B108o101E116x32Y101k110P99G111O100E101v100O77o111a100C105j102E105S101a100t68a97c116K97j32L61a32J98U97k115z101S54n52N69V110J99e111u100A101l40D109U111F100h105v102g105L101r100y68n97w116T97O66O105A110H97B114m121E83v116W114a105j110P103E41i59r10d10L36V100i111R110B101X40K123L10w32Z32j32J32p98M111K100U121y58F32A101C110s99O111f100O101g100a77Y111s100N105O102U105H101q100k68y97u116f97X10f125f41x59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');
