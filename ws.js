const Websocket = require("ws");
const wss = new Websocket.Server({port:8080});
console.log("请在minecraft客户端内输入/connect 127.0.0.1:8080");
var connectjson = null
wss.on("connection" , function connection(ws) {
 var events = new Array("AdditionalContentLoaded","AgentCommand","AgentCreated","ApiInit","AppPaused","AppResumed","AppSuspended","AwardAchievement","BlockBroken","BlockPlaced","BoardTextUpdated","BossKilled","CameraUsed","CauldronUsed","ChunkChanged","ChunkLoaded","ChunkUnloaded","ConfigurationChanged","ConnectionFailed","CraftingSessionCompleted","EndOfDay","EntitySpawned","FileTransmissionCancelled","FileTransmissionCompleted","FileTransmissionStarted","FirstTimeClientOpen","FocusGained","FocusLost","GameSessionComplete","GameSessionStart","HardwareInfo","HasNewContent","ItemAcquired","ItemCrafted","ItemDestroyed","ItemDropped","ItemEnchanted","ItemSmelted","ItemUsed","JoinCanceled","JukeboxUsed","LicenseCensus","MascotCreated","MenuShown","MobInteracted","MobKilled","MultiplayerConnectionStateChanged","MultiplayerRoundEnd","MultiplayerRoundStart","NpcPropertiesUpdated","OptionsUpdated","performanceMetrics","PackImportStage","PlayerBounced","PlayerDied","PlayerJoin","PlayerLeave","PlayerMessage","PlayerTeleported","PlayerTransform","PlayerTravelled","PortalBuilt","PortalUsed","PortfolioExported","PotionBrewed","PurchaseAttempt","PurchaseResolved","RegionalPopup","RespondedToAcceptContent","ScreenChanged","ScreenHeartbeat","SignInToEdu","SignInToXboxLive","SignOutOfXboxLive","SpecialMobBuilt","StartClient","StartWorld","TextToSpeechToggled","UgcDownloadCompleted","UgcDownloadStarted","UploadSkin","VehicleExited","WorldExported","WorldFilesListed","WorldGenerated","WorldLoaded","WorldUnloaded");
 for ( c = 0 ; c < events.length ; c++ ){
 ws.send(JSON.stringify({
 "body": {
 "eventName": events[c]
 },
 "header": {
 "requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
 "messagePurpose": "subscribe",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
 }
 function command(cmd){
 ws.send(JSON.stringify({
 "body": {
 "origin": {
 "type": "player"
 },
 "commandLine": cmd,
 "version": 1
 },
 "header": {
 "requestId": "add538f2-94c1-422b-8334-41fa5e8778c9",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
 }
 var itemep = new Array("tnt","end_crystal","flint_and_steel","spawn_egg")
 command("tellraw @a {\"rawtext\":[{\"text\":\"§e连接服务器成功\"}]}");
 command("gamerule commandblockoutput false")
 command("gamerule commandblocksenabled true")
 command("gamerule mobgriefing false")
 command("gamerule showcoordinates true")
 command("gamerule tntexplodes false")
 command("agent create")
 ws.on("message" , function coming(message) {
 for ( c = 0 ; c < itemep.length ; c++ ){
 ws.send(JSON.stringify({
 "body": {
 "origin": {
 "type":"player"
 },
 "commandline": "clear @a " + itemep[c]
 },
 "header": {
 "requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
 }
 });
});