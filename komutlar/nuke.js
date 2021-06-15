module.exports = {
name:"nuke",
code:`$editChannel[$get[kanal];$get[kat];$get[ad];$get[pz];$get[nsfw];$defualt;$default;yes;Nuke]
$wait[1s]
$channelSendMessage[$get[kanal];$userTag[$authorid] Kanal nukelenmiştir Herşey Kyoryuu'lara Yem Oldu {attachment:https://tenor.com/view/rias-gremory-high-school-dxd-oops-anime-wink-gif-15273489};no]
$setChannelTopic[$get[kanal];$get[topic]]
$wait[1s]
$let[kanal;$createChannel[$get[ad];text;yes;$get[kat]]]
$deleteChannels[$channelID]
$wait[1s]
$let[nsfw;$replaceText[$replaceText[$channelNSFW;true;yes;-1];false;no;-1]]
$let[topic;$channelTopic[$channelID]]
$let[ad;$channel[$channelID;name]]
$let[kat;$channelCategoryID[$channelID]]
$let[pz;$channel[$channelID;rawposition]]
$onlyBotPerms[managechannels;$customEmoji[pcross;$getVar[emojisw1]] | Bunun için Rolümün \`Kanalları Yönet\` İzni Açık Olmalı]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]   
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Uuuups Bir Hata İle Karşılaştım]
`
} 
