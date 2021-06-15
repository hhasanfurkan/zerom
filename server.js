const falsis = require('aoi.js');
const fs = require('fs');
const bot = new falsis.Bot({
	token: process.env['token'],
	prefix: '$getServerVar[Prefix]',
	mobile: false,
	fetchInvites: true
});
bot.loadCommands(`./komutlar/`);
/////Uptime Kodu Ellem
/////Uptime Kodu Elleme
bot.onPresenceUpdate()
bot.onChannelDelete()
bot.onChannelCreate()
bot.onChannelUpdate()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onLeave()
bot.onJoined()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onMessage()
bot.readyCommand({
  channel:"yarraa",
  code:`$log[Açıldım 😎✌️]`
}) //h.o bb 🐢 
bot.variables({
	afk: 'hayır',
	afkc: '0',
	afks: '',
	Prefix: 'zt?',
	lengel: 'kapalı',
	saas: 'kapalı',
	otorol: '',
	otorollog: '',
	krol: '',
	erol: '',
	kyetkili: '',
	kayıtsız: '',
	gkanal: '',
	tag: '',
	tagmesaj: 'almadı',
	tagrol: '',
	taglog: '',
	şarkı: '',
	caps: 'kapalı',
	capsyuzde: '',
	botengel: 'kapalı',
	botengellog: '',
	sayac: '0',
	sayaclog: '',
	yavaşmod: '0',
	hgbb: '',
  cban: 'k',
	banlog: '',
	snipe: '',
	snipeu: '',
	snipec: '',
	karaliste:'hayır',
	ksebep:'',
	premium:'no',
	presayı:'0',
  ckanal:'',
  ksayı:'0',
  kesayı:'0',
  kksayı:'0',
  kulsayı:'0',
  tavsiyelog:'',
  tavsiyekanal:'',
  warnsayı:'0',
  warnlog:'',
  wyetkili:'',
  izin:'',
  mrol:'',
  myrol:'',
  umrol:'',
  mlog:'',
  wsebep:'',
  emojisw1:'807766973949280266',
  emojisw2:'711249585812799489',
  mvrol:""
});

//status
bot.status({
	text: 'Endişelenme, öleceğimiz güne kadar hep birlikte olacağız',
	type: 'WATCHING',
	status: 'online',
	time: 15
});
bot.status({
	text: '$serverCount sunucuda $allMembersCount kullanıcıya $commandsCount Komutla hizmet veriyorum',
	type: 'WATCHING',
	status: 'online',
	time: 15
});
bot.status({
	text: 'Parzi <3',
	type: 'WATCHING',
	status: 'online',
	time: 15
});
bot.status({
	text: 'Prefix: zt? | zt?yardım',
	type: 'WATCHING',
	status: 'online',
	time: 15
});

//owner özel komutlar

bot.command({
	name: 'eval',
	code: `
  $eval[$message]
$onlyForIDs[677468381485596702;751805833125560362;655981789407346718;539843855567028227;828327187073466368;703160617095397447;$customEmoji[pcross;$getVar[emojisw1]] | Bu komut geliştiricilerime özeldir]
  `
});

//bot join command felan

bot.readyCommand({
channel:"834087275754815548",
code:`
$title[Ohayoo]
$description[$customEmoji[azerotwo;$getVar[emojisw2]] **Resetlendim 
$customEmoji[zttick_green;$getVar[emojisw2]] Toplam Sunucu Sayım \`$serverCount\` 
$customEmoji[ztkullanc;$getVar[emojisw2]] Toplam Üye Sayım \`$allMembersCount\`
$customEmoji[slash_commands;$getVar[emojisw1]] Toplam Komut Sayım \`$commandsCount\`
$customEmoji[high;$getVar[emojisw1]] Pingim \`$ping\`**]
$footer[$userTag[$clientID] | $day/$month/$year;$userAvatar[$botOwnerID]]
$thumbnail[$userAvatar[$clientID]]
$color[FFCCFF]
`
})

bot.musicStartCommand({
	channel: '$channelID',
	code: `
   `
});

bot.musicEndCommand({
	channel: '$channelID',
	code: `$customEmoji[ztmuzik;$getVar[emojisw2]] | Şarkı Bitti Ve Ses Kanalından Çıktım
`
})

bot.joinCommand({
	channel: '$getServerVar[otorollog]',
	code: `$giveRoles[$authorID;$getServerVar[otorol]]
       $customEmoji[ptick;$getVar[emojisw1]] | <@$authorID> Otorol Başarıyla Verildi.
        `
});

bot.joinCommand({
	channel: '$getServerVar[gkanal]',
	code: `<@$authorID>,<@&$getServerVar[kyetkili]>
  $title[Yeni Bir Üye Göründü]
  $description[
<a:auuuetkilendim:814297061368922123> **Aramıza Hoşgeldin \`$username\`**
  
<a:zttick_green:834244527996403743> **Seninle Beraber \`$membersCount\` Kişiyiz**

<a:dans7:811029971127762984> **Hesabının Kurulum Tarihi:** \`$creationDate[$authorID]\`
  
<a:aasabirsizm:814297373710483536> **Kayıt Olmak İçin <#$getServerVar[gkanal]> Kanalına Kayıt İçin Gerekli Bilgileri Yazıp <@&$getServerVar[kyetkili]> Ye Etiket Atın**$image[https://cdn.discordapp.com/attachments/837728955527987260/838368403990380584/tenor_4.gif]]
$color[303136]
  $giveRole[$authorID;$getServerVar[kayıtsız]
  $changeNickname[$authorID;$getServerVar[tag] | Kayıtsız]
  $onlyIf[$getServerVar[kayıtsız]!=;]
  $onlyIf[$getServerVar[gkanal]!=;]
  `
});

bot.joinCommand({
	channel: '$getServerVar[botengellog]',
	code: `
**$customEmoji[ztban;$getVar[emojisw2]] | Bir Bot Sunucuya Girdi Ve Botu Banladım Botun İsmi: \`$username\` Eğer Bot Sunucuya Alınmasını İstiyorsanız \`$getServerVar[Prefix]botizinver $authorID\` Yazın**
$ban[$authorID;Zero Two Bot Engel Sistemi ]
$onlybotperms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Olmalı]
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getservervar[botengellog]!=;]
$onlyIf[$getServerVar[botengel]!=kapalı;]
$onlyIf[$authorID!=$getServerVar[izin];**$customEmoji[azerotwo;$getVar[emojisw2]] | <@$authorID> Adlı Bot Sunucuya Girdi Ama \`$username[$ownerID]\` Ab İzin Verdiği İçin Banlanmadı**]
`
});

bot.joinCommand({
	channel: '$getServerVar[sayaclog]',
	code: `
 $customEmoji[downvote;$getVar[emojisw1]]**\`$userTag[$authorID]\` Adlı Kullanıcı Aramıza Katıldı Şuanda \`$membersCount\` Kişiyiz \`$getServerVar[sayac]\` Kullanıcıya Ulaşmamıza \`$sub[$getServerVar[sayac];$membersCount]\` Kişi Kaldı**
  `
});

bot.leaveCommand({
	channel: '$getServerVar[sayaclog]',
	code: `
  $customEmoji[upvote;$getVar[emojisw1]]**\`$userTag[$authorID]\` Adlı Kullanıcı Aramızdan Ayrıldı Şuanda \`$membersCount\` Kişiyiz \`$getServerVar[sayac]\` Kullanıcıya Ulaşmamıza \`$sub[$getServerVar[sayac];$membersCount]\` Kişi Kaldı**
  `
});

bot.joinCommand({
	channel:'$getServerVar[hgbb]',
	code: `
  $title[\`$username\` Adlı Kullanıcı Sunucuya Girdi]
  $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png; ]&middle=Hosgeldin&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23; ]; ;%20; ]&bottom=$replaceText[Toplam Uye: $membersCount[$guildID]; ;%20;-1]&background=https://cdn.discordapp.com/attachments/836854020454875136/848299357442015292/images_10.jpeg&text=%23ffccff&avatarborder=%23FFccFF&avatarbg=%23FF28b3]
  `
});

bot.leaveCommand({
	channel:'$getServerVar[hgbb]',
	code:` 
$title[\`$username\` Adlı Kullanıcı Sunucudan Çıktı]
  $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png; ]&middle=Baybay&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23; ]; ;%20; ]&bottom=$replaceText[Toplam Uye: $membersCount[$guildID]; ;%20;-1]&background=https://cdn.discordapp.com/attachments/836854020454875136/848299357442015292/images_10.jpeg&text=%23ffccff&avatarborder=%23FFccFF&avatarbg=%23FF28b3]
  `
});

bot.botJoinCommand ({
channel:"$systemChannelID",
code:`$botLeave
$customEmoji[pcross;$getVar[emojisw1]] | Üzgünüm Ama Sunucunuz 30 Üye Altı Sahibim 30 Üye Altı Sunuculara Katılmama İzin Vermiyor
$onlyIf[$membersCount<=30;]
`
})    


bot.botJoinCommand({
	channel:'$systemChannelID',
	code: `$title[Zero Two Sunucuya İniş Yaptı $customEmoji[azerotwo;$getVar[emojisw2]]]
$description[Merhaba, Ben Zero Two Prefixim \`$getServerVar[Prefix]\` Harika Komutlarıma Göz Gezdirmek İçin **$getServerVar[Prefix]yardım** yazabilirsiniz!]
$color[FFCCFF]
$channelSendMessage[834519995488403519;
{author:Biri beni sunucusuna ekledi!}
{thumbnail:$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]}
{description:
  Eklendiğim Sunucu = [$serverName]($getServerInvite)
  Sahibi = [$userTag[$ownerID]](https://discord.com/users/$ownerID)
  
  Toplam Üye = $membersCount}
  {footer: Toplam $serverCount Sunucuya ulaştım}{color:FFCCFF}
]
`
});
bot.onGuildJoin();
bot.botLeaveCommand({
	channel:'834519995488403519',
	code: `
$author[Bir Sunucudan Atıldım.]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  Atıldığım Sunucu = $serverName
  Sahibi = [$username[$ownerID]#$discriminator[$ownerID]](https://discord.com/users/$ownerID)
  
  Toplam Üye = $membersCount]
  $footer[Toplam $serverCount Sunucuya ve $allMembersCount Üyeye Düştüm]
$color[RED]`
});
bot.onGuildLeave();

bot.command({
	name: 'çıkış-ban',
	aliases: ['çıkban'],
	code: `$if[$message[1]==aç]
  $setServerVar[cban;a]
  $customEmoji[ptick;$getVar[emojisw1]] | Çıkış Ban Açıldı Sunucudan Çıkan Üyeler Banlanıcak Log kanalı Ayarlamak İsterseniz $getServerVar[Prefix]çıkış-ban kapat Yazıp $getServerVar[Prefix]çıkış-ban aç #log Yazın
$onlyIf[$mentionedChannels[1]==;{execute:çıkban}]
  $onlyBotPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İznim Açık Olmalı]
  $onlyIf[$getServerVar[cban]==k;$customEmoji[pcross;$getVar[emojisw1]] | Bu sistemi zaten aktif kapatmak için \`$getServerVar[Prefix]çıkış-ban kapat\` Yazın]
  $elseIf[$message[1]==kapat]
  $setServerVar[banlog;]
  $setServerVar[cban;k]
  $customEmoji[ptick;$getVar[emojisw1]] | Çıkış Ban Kapatıldı
  $onlyIf[$getServerVar[cban]==a;$customEmoji[pcross;$getVar[emojisw1]] | Bu sistemi zaten kapalı açmak için \`$getServerVar[Prefix]çıkış-ban aç #log\` Yazın]
  $endElseIf
  $endif
  $onlyIf[$checkCondition[$message[1]==aç]$checkCondition[$message[1]==kapat]!=falsefalse;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]çıkış-ban aç/kapat #banlog]
$onlyIf[$message[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]çıkış-ban aç/kapat #banlog]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.awaitedCommand({
	name: 'çıkban',
	code: `  $setServerVar[banlog;$mentionedChannels[1]]
$setServerVar[cban;a]
$customEmoji[ptick;$getVar[emojisw1]] | Çıkış Ban Açıldı Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
  $onlyBotPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] |  Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Açık Olmalı]
  $onlyIf[$getServerVar[cban]==k;$customEmoji[pcross;$getVar[emojisw1]] | Bu sistem zaten açık
$onlyIf[$getGlobalUserVar[karaliste]!=evet;]
  `
});

bot.leaveCommand({
	channel: '$randomChannelID',
	code: `$channelSendMessage[$getServerVar[banlog];{description:$customEmoji[ztban;$getVar[emojisw2]] | $username[$authorID] - <@$authorID> İsimli Kişi Sunucudan Çıkış Yaptığı İçin Banlandı}{footer:Bu Sistem Kremlin Development Tan Alınmıştır Kendilerine Çok Çok Teşekkürler}{color:303136}]
    $onlyIf[$getServerVar[banlog]!=;]
    $ban[$authorid;Zero Two Çıkış Ban Sistemi]
    $onlyBotPerms[ban;]
    $onlyIf[$getServerVar[cban]==a;]`
});

//bot bilgi komutları

bot.command({
	name: 'destek',
	code: `
  https://discord.gg/tqWe3TGUNd
  `
});

bot.command({
	name: 'davet',
	code: `
  $title[Ohayoo]
  $description[[Selam Sanırım Davet Linkimi Aradın Beni Davet Etmek Tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot+applications.commands&permissions=8)]
  $image[$randomText[https://cdn.discordapp.com/attachments/821109719955013663/824685641136209950/tenor_1.gif;https://cdn.discordapp.com/attachments/787368088000921610/825412404602863626/tenor_11.gif;https://cdn.discordapp.com/attachments/787368088000921610/825412985061113866/tenor_10.gif;https://cdn.discordapp.com/attachments/787368088000921610/825414198246637608/tenor_12.gif;https://cdn.discordapp.com/attachments/766946905505660928/826011973702385684/tenor_13.gif]]
  $footer[Developer: ParzivaL Senpai;$serverIcon[$guildID]]
  $color[FFCCFF]
  `
});

//aptal repl.it yüklemediği komutları

bot.command({
name:"mute-rol",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | Mute Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
$setServerVar[mrol;$mentionedRoles[1]]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etiketle]
$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]mute-rol @muted ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
})




bot.command({
name:"uyarı-sil",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | <@$mentioned[1]> Adlı Üyenin Uyarıları Silindi

$setServerVar[warnsayı;0;$mentioned[1]]

$onlyIf[$hasRole[$authorID;$getServerVar[wyetkili]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`$roleName[$getServerVar[wyetkili]]\` Rolün Olmalı]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
$onlyIf[$getServerVar[wyetkili]!=;$customEmoji[pcross;$getVar[emojisw1]] | Uyarı Sistemini Kurup Tekrar Deneyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
})

//aptal repl.it yüklemediği komutlar


//komutlar

bot.command({
name:"<@813872156349956177>",
code:`
$title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]
$description[**$customEmoji[azerotwo;$getVar[emojisw2]]Selam Ben <@$clientID> , Prefixim: \`$getServerVar[Prefix]\` , Yardım Menüm: \`$getServerVar[Prefix]yardım\`
—————————————————————
$customEmoji[ztdeveloper;$getVar[emojisw2]]\`Yaratıcım: \` [$userTag[$botOwnerID]](https://discord.gg/sRZdSTKjFP)

$customEmoji[zttakla;$getVar[emojisw2]]\`Geliştiricilerim:\` [$userTag[655981789407346718]](https://discord.gg/bwgyYW6e5h) , [$userTag[539843855567028227]](https://discord.gg/UYgHZQbQ95) , [$userTag[751805833125560362]](https://discord.gg/Atcpb2mjR5)

$customEmoji[zthawlipika;$getVar[emojisw2]]\`Proje Sponsoru:\` [$userTag[655981789407346718]](https://discord.gg/bwgyYW6e5h) , [$userTag[539843855567028227]](https://discord.gg/UYgHZQbQ95)

$customEmoji[ztortaparmak;$getVar[emojisw2]]\`Hiç Bir Şeye Yaramayanlar:\` [$userTag[768154291687915520]](https://discord.gg/wpPzBuUB2r)
—————————————————————**]
$color[FFCCFF]
$deleteIn[5s]
`,
nonPrefixed: true
})
//pc için aliases eklemeye üşendim 'furki'
bot.command({
name:"<@!813872156349956177>",
code:`
$title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]
$description[**$customEmoji[azerotwo;$getVar[emojisw2]]Selam Ben <@$clientID> , Prefixim: \`$getServerVar[Prefix]\` , Yardım Menüm: \`$getServerVar[Prefix]yardım\`
—————————————————————
$customEmoji[ztdeveloper;$getVar[emojisw2]]\`Yaratıcım: \` [$userTag[$botOwnerID]](https://discord.gg/sRZdSTKjFP)

$customEmoji[zttakla;$getVar[emojisw2]]\`Geliştiricilerim:\` [$userTag[655981789407346718]](https://discord.gg/bwgyYW6e5h) , [$userTag[539843855567028227]](https://discord.gg/UYgHZQbQ95) , [$userTag[751805833125560362]](https://discord.gg/Atcpb2mjR5)

$customEmoji[zthawlipika;$getVar[emojisw2]]\`Proje Sponsoru:\` [$userTag[655981789407346718]](https://discord.gg/bwgyYW6e5h) , [$userTag[539843855567028227]](https://discord.gg/UYgHZQbQ95)

$customEmoji[ztortaparmak;$getVar[emojisw2]]\`Hiç Bir Şeye Yaramayanlar:\` [$userTag[768154291687915520]](https://discord.gg/wpPzBuUB2r)
—————————————————————**]
$color[FFCCFF]
$deleteIn[5s]
`,
nonPrefixed: true
})

bot.awaitedCommand({
	name: 'rolver',
	code: `$giveRole[$authorID;$mentionedRoles[1]]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;]
	`
});

bot.awaitedCommand({
	name: 'rolal',
	code: `$takeRole[$authorID;$mentionedRoles[1]]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;]
	`
});

bot.command({
	name: 'prefix',
	code: `
$setServerVar[Prefix;$message[1]]
$customEmoji[ptick;$getVar[emojisw1]] | Prefix Başarıyla Ayarlandı. Yeni Prefix \`$message[1]\`
$onlyPerms[admin;<a:pcross:835696878426783754> | Bunun İçin \`Yönetici\` İznin Olmalı]
$suppressErrors[Bir hata Oluştu]
$argsCheck[<1;Bir prefix söyleyin]
$onlyIf[$message[1]!=;<a:pcross:835696878426783754> | Bir prefix söyleyin]
$changeNickname[813872156349956177;[$message[1]] Zero Two]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bunun İçin Premium Üye Olmalısınız**]

`
});

bot.command({
	name: 'avatar',
	code: `
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]]
  $footer[İsteyen Kişi $username;$authorAvatar]
  $onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.command({
	name: 'tayarla',
	code: `
   $setServerVar[tag;$message[1]]
   $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
   $onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tayarla ♡]
$customEmoji[ptick;$getVar[emojisw1]] |  Tagınız \`$message[1]\` Olarak ayarlandı
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.command({
	name: 'tag',
	code: `
   $getServerVar[tag]
   $onlyIf[$getServerVar[tag]!=; $customEmoji[pcross;$getVar[emojisw1]] | Tag Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]tayarla\` Yazın]
  `
});
bot.command({
	name: 'ksıfırla',
	code: ` $customEmoji[ptick;$getVar[emojisw1]] | Kayıt Sistemi Resetlendi
  $setServerVar[kayıtsız;]
  $setServerVar[krol;]
  $setServerVar[erol;]
  $setServerVar[kyetkili;]
  $setServerVar[gkanal;]
  $setServerVar[ckanal;]
  $setServerVar[tag;]
  $setServerVar[tagmesaj;]
  $setServerVar[tagrol;]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  
  
  `
});

bot.command({
	name: 'logo',
	code: `
   $title[İşte Logonuz]
   $description[$image[$serverIcon[$guildID;2048;yes]]]
   $footer[İsteyen: $username; $authorAvatar]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.command({
	name: 'fakemesaj',
	code: `
  $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$message]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
  $cooldown[1m;$customEmoji[pcross;$getVar[emojisw1]] | Bunu 1 Dakikada Bir Kullanabilirsin]
  $onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;$customEmoji[pcross;$getVar[emojisw1]] | Üzgünüm Sen İstedin Diye Reklam Yapıcak Değilim]
  `
});

bot.command({
	name: 'stonks',
	code: `$color[C100FF]
$deletecommand
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]stonks @zerotwo]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'not-stonks',
	code: `$color[#C100FF]
$deletecommand
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=1024&notstonks=true]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]not-stonks @zerotwo]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'aşkölç',
	aliases: ['aşkölçer', 'love', 'lovecheck', 'aşk-ölç'],
	code: `$title[Aşk Ölçülüyor...]
$description[$image[https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]<@$authorID> İle <@$mentioned[1]> Arasındaki Aşk Yüzdesi %$random[0;100]]
$color[FFCCFF]
$onlyIf[$mentioned[1]!=$authorid;$customEmoji[ztyak;$getVar[emojisw2]] | Agab ]
$onlyIf[$isBot[$mentioned[1]]!=true; $customEmoji[ztyak;$getVar[emojisw2]] | Botu Sevicek Kadar Yalnızmısın Be Kral]
$onlyIf[$mentioned[1]!=$botOwnerID;Parzim Sadece Bana Aittir! Endişelenme, Öleceğimiz Güne Kadar Hep Birlikte Olacağız...]
$onlyIf[$mentioned[1]!=$clientID; $customEmoji[pcross;$getVar[emojisw1]] | Üzgünüm Ama Ben Parzivalime Aşığım Ona İhanet Edemem...]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]aşkölç @parzi]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

//müzik komutları

bot.command({
	name: 'p',
	aliases: ['play', 'çal'],
	code: `$author[Şarkı oynatılmaya başlandı;$authorAvatar]
$description[$customEmoji[search;$getVar[emojisw1]]**Aranan Şarkı: \`$message\`**
$customEmoji[ztmuzik2;$getVar[emojisw2]] **Şuan Çalınan Şarkı **: $replaceText[$get[şarkı];$songInfo[title];-1] __$songInfo[title]__
$customEmoji[zttakla;$getVar[emojisw2]] **Şarkı Açıklaması **: __$songInfo[description]__
$customEmoji[ztmutlunao;$getVar[emojisw2]] **Şarkı uzunluğu **: __$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]__
$customEmoji[ztyukleniyor2;$getVar[emojisw2]] **Şarkı Linki **: [Tıkla]($songInfo[url])
$customEmoji[ztcrown_white;$getVar[emojisw2]] **Kanal**: [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[zthawlipika;$getVar[emojisw2]] **Şarkıyı Arayan Kişi**: __$userTag[$authorID]__]
$thumbnail[$songInfo[thumbnail]]
$footer[Aradığınız Şarkı Sıraya Eklendi Sıraya Bakmak İçin $getServerVar[Prefix]queue Yazın]
$color[303136]
$setServerVar[şarkı;$authorID]
$let[$playSong[$message;...;yes;yes;$customEmoji[pcross;$getVar[emojisw1]] | \`$message\` adında bir müzik bulamadım.]]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$argsCheck[>1;$customEmoji[pcross;$getVar[emojisw1]] | Lütfen bir şarkı adı gir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});
bot.command({
	name: 'sıralama',
	aliases: ['queue'],
	code: `$description[
 Şuanda Çalan: [$songInfo[title]]($songInfo[url])
 Şarkıyı Açan: <@$songInfo[userID]>
 --------------------------------------
 **Sıralama:**
 $queue[1;15;{number} - {title}]]
 $color[303136]
 $onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
 $onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
 $onlyIf[$queue[1;10;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
 $suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
});

bot.command({
	name: 'durdur',
	aliases: ['stop', 'pause'],
	code: `
$addCmdReactions[⏸]
$pauseSong
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmojş[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross;$getVar[emojisw1]] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'devam',
	aliases: ['resume'],
	code: `
$addCmdReactions[▶]
$resumeSong
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'tekrarla',
	aliases: ['loop'],
	code: `
$addCmdReactions[🔁]
$let[tekrarla;$loopQueue]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross;$getVar[emojisw1]] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'geç',
	aliases: ['skip'],
	code: `
$addCmdReactions[⏯]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross;$getVar[emojisw1]] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'çık',
	aliases: ['leave'],
	code: `
$addCmdReactions[⏹]
$leaveVC
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Ses kanalından çıkamadım]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross;$getVar[emojisw1]] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
});

bot.command({
	name: 'ses',
	aliases: ['sound'],
	code: `
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı çalmazken kullanamazsın]
$onlyIf[$message<=200;$customEmoji[pcross;$getVar[emojisw1]] | Maximum 200 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]ses 100]
$argsCheck[1;$customEmoji[pcross;$getVar[emojisw1]] | Bir ses seviyesi gir]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross;$getVar[emojisw1]] | Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanabilir]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bunun İçin Premium Üye Olmalısınız**]
`
});

bot.command({
name:"nowplay",
aliases: ["now-play","np","now-playing","nowplaying","şuan-çalan"],
code:`
$title[Ohayoo]
$description[**$customEmoji[ztmuzik;$getVar[emojisw2]] Şuan Çalan Şarkı:** [$songInfo[title]]($songInfo[url])
**$customEmoji[ztmuzik2;$getVar[emojisw2]] Şarkı Uzunluğu:** __$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]__
**$customEmoji[ztkullanc;$getVar[emojisw2]] Şarkıyı Başlatan:** __$userTag[$getServerVar[şarkı]] | $nickname[$getServerVar[şarkı]]__]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross;$getVar[emojisw1]] | Şarkı Çalmazken Kullanamazsın]
$onlyIf[$voiceID!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir Ses Kanalına Girmeden Kullanamazsın]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Şarkı Çalmazken Kullanamazsın]`
})


//alwaysExecute komutları için

bot.command({
  name:"$alwaysExecute",
  code:`
 $description[**$customEmoji[pcross;$getVar[emojisw1]] | Bu Sunucuda Birdaha Link Atmaya Çalışma <@$authorID>**]
 $color[random]
$deletecommand
  $deleteIn[5s]

  $onlyIf[$getServerVar[lengel]!=kapalı;]
  $onlyIf[$hasPerms[$authorID;admin]!=true; ]
$onlyIf[$checkContains[$toLowercase[$message];https;http;.com;.net;.me;discord.gg;discord.gift]==true;]
 `,
  nonPrefixed: true
})

bot.updateCommand({
channel:"$channelID",
code:` $description[**$customEmoji[pcross;$getVar[emojisw1]] | Bu Sunucuda Birdaha Link Atmaya Çalışma <@$authorID>**]
 $color[random]
$deletecommand
  $deleteIn[5s]

  $onlyIf[$getServerVar[lengel]!=kapalı; ]
  $onlyIf[$hasPerms[$authorID;admin]!=true; ]
$onlyIf[$checkContains[$toLowercase[$message];https;http;.com;.net;.me;discord.gg;discord.gift]==true;]
 `,
  nonPrefixed: true
})
bot.onMessageUpdate()



bot.command({
	name: '$alwaysExecute',
	code: ` 
  $deletecommand
 $customEmoji[pcross;$getVar[emojisw1]] | <@$authorID> Büyük Harfle Yazmayı Bırakmassan Mesajını Silmeye Devam Edicem
  $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=$getServerVar[capsyuzde]]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$getServerVar[caps]!=kapalı;]
  $onlyIf[$charCount[$message]>=2;]
  $suppressErrors

  `,
	nonPrefixed: true
});

bot.command({
	name: 'sa',
	aliases: ['selam','selamun aleyküm','sea'],
	code: `
 $reply[$messageID;**Aleyküm Selam** Hoşgeldin $nickname;yes]
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIf[$message==;]
    $onlyIf[$getGlobalUserVar[premium; $authorID]!=yes;]
  
  $onlyIf[$getGlobalUserVar[premium;$authorID]!=yes;]
  `,
	nonPrefixed: true
});

bot.command({
	name: 'saas-aç',
	code: `
  $customEmoji[ptick;$getVar[emojisw1]] | Sa as sistemi açıldı kapatmak için \`$getServerVar[Prefix]saas-kapat\` Yazın
  $setServerVar[saas;açık]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici \` İznin Olmalı]
  $onlyIf[$getServerVar[saas]!=açık;$customEmoji[pcross;$getVar[emojisw1]] | Bu Özellik Zaten Açık]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.command({
	name: 'saas-kapat',
	code: `
 $customEmoji[ptick;$getVar[emojisw1]] | Sa as sistemi kapatıldı geri açmak için \`$getServerVar[Prefix]saas-aç\` Yaz
  $setServerVar[saas;kapalı]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$getServerVar[saas]!=kapalı;$customEmoji[pcross;$getVar[emojisw1]] | Bu Özellik Zaten Kapalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
});

bot.command({
name:"sa",
aliases: ['selam','sea','selamun aleyküm',],
code:`
**$customEmoji[ztas;$getVar[emojisw2]]Aleykum Selam Hoşgeldin \`$username\` Adlı Premium Üye $customEmoji[azerotwo;$getVar[emojisw2]]**
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;]
$onlyIf[$message==;]
`,
nonPrefixed: true
});

//yardım menüleri

bot.command({
	name: 'yardım',
	code: `
  $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
  $description[**Hey Selam Ben Zero Two Sunucunuz İçin Ayarlanan Prefixim **: \`$getServerVar[Prefix]\` 
  
<a:azerotwo:827614812250046565>**\`$getServerVar[Prefix]genel\`** __Bu sayede genel komutlarımı görebilirsiniz__

$customEmoji[ztayar;$getVar[emojisw2]]**\`$getServerVar[Prefix]ayarlamalı\`** __Bu sayede ayarlanabilir komutlarımı görebilirsiniz__

$customEmoji[ztban;$getVar[emojisw2]]**\`$getServerVar[Prefix]moderasyon\`** __Bu sayede mooderasyon komutlarımı görebilirsiniz__

$customEmoji[ztdans7;$getVar[emojisw2]]**\`$getServerVar[Prefix]kayıt-sistemi\`** __Bu Sayede Kayıt Komutlarımı Görebilirsin__

$customEmoji[zttick_green;$getVar[emojisw2]]**\`$getServerVar[Prefix]diğer-sistemler\`** __Bu Sayede Diğer Ayarlanabilir Sistemlerimi Görebilirsin__

$customEmoji[ztmoneypanda;$getVar[emojisw2]]**\`$getServerVar[Prefix]premium-menü\`** __Bu Sayede Premium Üyelere Özel Komutları Görebilirsiniz__

$customEmoji[ztmuzik;$getVar[emojisw2]]**\`$getServerVar[Prefix]müzik\`** __Bu Sayede Müzik Komutlarımı Görebilirsin__

$customEmoji[zttakla;$getVar[emojisw2]]**\`$getServerVar[Prefix]eğlence\`** __Bu Sayede Eğlence Komutlarımı Görebilirsiniz__
$image[https://cdn.discordapp.com/attachments/835508105106292766/836160852309966849/07657bd477058b6a8285ed9a5b73ddc8.gif]
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)
]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$serverIcon[$guildID]]
$color[WHITE]
  `
});

bot.command({
	name: 'genel',
	code: `
  $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
  $description[**Genel Komutlarıma Hoşgeldin** $customEmoji[azerotwo;$getVar[emojisw2]]
**\`$getServerVar[Prefix]avatar\`** __Üyelerin avatarlarını almanızı sağlar__
**\`$getServerVar[Prefix]logo\`** __Sunucunun logosunu almanızı sağlar__
**\`$getServerVar[Prefix]owner\`** __Sunucu sahibini atar__
**\`$getServerVar[Prefix]sunucu-bilgi\`** __Sunucu Bilgilerini Atar__
**\`$getServerVar[Prefix]kullanıcı-bilgi\`** __Kullanıcı Hakkındaki Bilgileri Atar__
**\`$getServerVar[Prefix]afk\`** __Afk olmanızı sağlar__
**\`$getServerVar[Prefix]i\`** __İstatisklerimi gösterir__
**\`$getServerVar[Prefix]davet\`** __Davet linkimi almanızı sağlar__
**\`$getServerVar[Prefix]destek\`** __Destek sunucumun davet linkini verir__
**\`$getServerVar[Prefix]zerotwofoto\`** __Bot Sürekli Değişen Zero Two Fotoları Atar__
**\`$getServerVar[Prefix]yetkilerim\`** __Sunucudaki İzinlerinizi Atar__
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]


  `
});

bot.command({
	name: 'ayarlamalı',
	code: `
  $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
  $description[**Ayarlanabilir Komutlarıma Hoşgeldin** $customEmoji[ztayar;$getVar[emojisw2]]
  
**\`$getServerVar[Prefix]saas-aç\`** __Bu Sayede Sa As Sistemini Açabilirsiniz__
**\`$getServerVar[Prefix]saas-kapat\`** __Bu Sayede Sa As Sistemini Kapatabilirsiniz__
**\`$getServerVar[Prefix]linkengel-aç\`** __Bu Sayede Link Engeli Açabilirsiniz__
**\`$getServerVar[Prefix]linkengel-kapat\`** __Bu Sayede Link Engeli Kapatabilirsiniz__
**\`$getServerVar[Prefix]otorol\`** __Otorol Ayarlarmanıza Yarar__
**\`$getServerVar[Prefix]otorolkapat\`** __Otorol Sıfırlamanıza Yarar__
**\`$getServerVar[Prefix]caps-engel\`** __Bu Sayede Büyük Harf Engel Sistemini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]bot-engel-aç\`** __Bu Sayede Sunucuya Bot Eklendiğinde Banlanmasını Sağlayabilirsiniz__
**\`$getServerVar[Prefix]bot-engel-kapat\`** __Bu Sayede Bot Engeli Kapatabilirsiniz__
**\`$getServerVar[Prefix]sayaç\`** __Bu Sayede Sayaç Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]sayaç-kapat\`** __Bu Sayefe Sayacı Kapatabilirsiniz__
**\`$getServerVar[Prefix]hgbb\`** __Bu Sayede HgBb Sistemini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]hgbb-kapat\`** __Bu Sayede HgBb Sistemini Kapatabilirsiniz__
**\`$getServerVar[Prefix]çıkış-ban\`** __Bu Sayede Sunucudan Çıkan Üyeleri Banlayabilirsiniz__
<a:azerotwo:827614812250046565>[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
	name: 'moderasyon',
	code: `
   $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
   $description[**Moderasyon Komutlarıma Hoşgeldin** $customEmoji[ztban;$getVar[emojisw2]]
  
**\`$getServerVar[Prefix]ban\`** __Bu sayede üyeleri banlayabilirsin__
**\`$getServerVar[Prefix]forceban\`** __Bu Sayede Sunucuda Olmayan Üyeleride Banlayabilirsin__
**\`$getServerVar[Prefix]unban\`** __Bu Sayede Kullanıcıların Banını Kaldırabilirsin__
**\`$getServerVar[Prefix]banlog\`** __Bu Sayede Ban Log Ayarlarsınız Üyeler Banlandığında Mesaj Atar__
**\`$getServerVar[Prefix]kick\`** __Bu Sayede Kullanıcıları Sunucudan Atabilirsiniz__
**\`$getServerVar[Prefix]nuke\`** __Bu Sayede Kanalları Silip Aynı Ayarlarla Yeniden Yaratabilirsiniz__
**\`$getServerVar[Prefix]kanal\`** __Bu Sayede Kanalı Kilitleyebilir Ve Açabilirsiniz__
**\`$getServerVar[Prefix]rolver\`** __Bu Sayede Etiketli Kullanıcıya Etiketli Rolü Verebilirsiniz__
**\`$getServerVar[Prefix]rolal\`** __Bu Sayede Etiketli Kullanıcıdan Etiketli Rolü Alabilirsiniz__
**\`$getServerVar[Prefix]herkese-rol-ver\`** __Bu Sayede Herkese Rol Verebilirsiniz__
**\`$getServerVar[Prefix]herkesten-rol-al\`** __Bu Sayede Herkesten Rol Alabilirsiniz__
**\`$getServerVar[Prefix]sil\`** __Bu Sayede Sohbetten Mesaj Silebilirsiniz__
**\`$getServerVar[Prefix]slowmode\`** __Bu Sayede Kanalın Yavaş Modunu Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]prefix\`** __Bu Sayede Sunucunuza Özel Prefix Yapabilirsiniz__
$customEmoji[azerotwo;$getVar[emojisw2]][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8589934591)]
$footer[Destek sunucuma gelmek için $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
	name: 'kayıt-sistemi',
	code: `
    $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
    $description[**Kayıt Sistemime Hoşgeldin** $customEmoji[ztdans7;$getVar[emojisw2]]
    
**\`$getServerVar[Prefix]kayıtsız\`** __Bu Sayede Kayıtsız Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]krol\`** __Bu Sayede Kız Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]erol\`** __Bu Sayede Erkek Rolünü Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]kyetkili\`** __Bu Sayede Kayıt Yetkilisini Ayarlayabilirsiniz__
**\`$getServerVar[Prefix]gkanal\`** __Bu Sayede Kayıt Kanalını Seçersiniz Üyeler Katıldığında O Kanala Mesaj Gönderilir__
**\`$getServerVar[Prefix]çkanal\`** __Bu Sayede Çıkış Kanalı (kayıt log) Ayarlarsınız Chat Olarak Ayarlanması Önerilir__
**\`$getServerVar[Prefix]tayarla\`** __Bu Sayede Tag Ayarlarsınız__
**\`$getServerVar[Prefix]tag\`** __Bu Sayede Ayarlı Tagı Alabilirsiniz__
**\`$getServerVar[Prefix]tagrol\`** __Bu Sayede Tagınızı Alan Üyelere Otomatik Rol Verilir__
**\`$getServerVar[Prefix]erkek\`** __Bu Sayede Erkek Üyeleri Kayıt Edebilirsiniz__
**\`$getServerVar[Prefix]kız\`** __Bu Sayede Kız Üyeleri Kayıt Edebilirsiniz__
**\`$getServerVar[Prefix]kayıt-bilgi\`** __Bu Sayede Kayıt Sisteminin Bilgilerini Alabilirsiniz__
**\`$getServerVar[Prefix]ksıfırla\`** __Bu Sayede Tüm Kayıt Sistemini Sıfırlarsınız__
$customEmoji[azerotwo;$getVar[emojisw2]][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=813872156349956177&scope=bot&permissions=8)]
$footer[Destek Sunucucuma Gelmek İçin  $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
   `
});

bot.command({
	name: 'panel',
	code: `$reactionCollector[$splitText[1];$getservervar[şarkı];1h;🔇,🔈,🔉,🔊,▶️,⏸,⏯,🔁,⏹;kıs,ses1,ses2,ses3,devam,durdur,geç,tekrarla,çık;yes]
$textSplit[$sendMessage[{title:$username[$clientID] Müzik Paneli}{description:Aşağıdaki emojilere tıklayarak bu işlevleri kullanabilirsiniz.:

🔇 - **Sesi %0 yapar**
🔈 - **Sesi %50 yapar**
🔉 - **Sesi %100 yapar**
🔊 - **Sesi %200 yapar**
▶️ - **Şarkıya Devam eder**
⏸ - **Şarkıyı Durdurur**
⏯️ - **Şarkıyı geçer**
🔁 - **Şarkıyı tekrarlar**
⏹ - **Kanaldan Çıkar**

__**Şarkı Bilgisi**__
$customEmoji[ztmuzik2;$getVar[emojisw2]]**Şuanda Çalan** : [$songInfo[title]]($songInfo[url])
$customEmoji[ztsure;$getVar[emojisw2]]**Kalan Süre** : $replaceText[$songInfo[duration_left];Seconds;Saniye;-1]
$customEmoji[ztsure2;$getVar[emojisw2]]**Toplam Süre** : $replaceText[$songInfo[duration];Seconds;Saniye;-1]
$customEmoji[zttakla;$getVar[emojisw2]]**Şarkı Açıklaması** : $songInfo[description]
$customEmoji[ztyukleniyor2;$getVar[emojisw2]]**Şarkı Linki** : [Tıkla]($songInfo[url])
$customEmoji[ztcrown_white;$getVar[emojisw2]]**Şarkı Sahibi** : [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[zthawlipika;$getVar[emojisw2]]**Şarkıyı Açan** : <@$songInfo[userID]>
}{color:303136}{thumbnail:$songInfo[thumbnail]}{footer:Paneli sadece son şarkıyı başlatan kullanabilir. Şuanda paneli sadece $userTag[$getservervar[şarkı]] kullanabilir.:$userAvatar[$getservervar[şarkı]]};yes]; ]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken paneli kullanamazsın Şarkı Açmak İçin \`$getServerVar[Prefix]play\` Yazın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen paneli kullanamazsın]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bunun İçin Premium Üye Olmalısınız**]
`
});

bot.awaitedCommand({
	name: 'kıs',
	code: `$volume[1]
 :musical_note: Ses %0 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
	name: 'ses1',
	code: `$volume[50]
 :musical_note: Ses %50 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
	name: 'ses2',
	code: `$volume[100]
 :musical_note: Ses %100 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
	name: 'ses3',
	code: `$volume[200]
 :musical_note: Ses %200 olarak ayarlandı
 $suppressErrors[Müzik Çalmazken ses ayarlanamaz]`
});

bot.awaitedCommand({
	name: 'devam',
	code: `$resumeSong
 :musical_note: Şarkı devam ettiriliyor
 $suppressErrors[Müzik çalmazken devam ettireceğim bir şarkı yok]`
});

bot.awaitedCommand({
	name: 'durdur',
	code: `$pauseSong
 :musical_note: Şarkı durduruldu
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
});

bot.awaitedCommand({
	name: 'geç',
	code: `$let[geç;$skipSong]
 :musical_note: Şarkı geçildi
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
});

bot.awaitedCommand({
	name: 'tekrarla',
	code: `$let[loop;$loopQueue]
 :musical_note: Şarkı tekrarlanıyor
 $suppressErrors[Tekrarlanacak bir şarkı bulamadım]`
});

bot.awaitedCommand({
	name: 'çık',
	code: `$leaveVC
$channelSendMessage[$channelID;:musical_note: Ses kanalından çıktım]
$suppressErrors[Ses kanalından çıkamadım]`
});

bot.command({
	name: 'müzik',
	code: `
  $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
  $description[**Müzik Komutlarıma Hoşgeldin** $customEmoji[ztmuzik;$getVar[emojisw2]]
**\`$getServerVar[Prefix]play\`** __Bu Sayede Şarku Açabirsiniz__
**\`$getServerVar[Prefix]skip\`** __Bu Sayede Şarkıyı Geçebilirsiniz__
**\`$getServerVar[Prefix]stop\`** __Bu Sayede Şarkıyı Durdurabilirsiniz__
**\`$getServerVar[Prefix]resume\`** __Bu Sayede Şarkıyı Devam Ettirebilirsiniz__
**\`$getServerVar[Prefix]loop\`** __Bu Sayede Şarkıyı Tekrarlayabilirsiz__
**\`$getServerVar[Prefix]queue\`** __Bu Sayede Şarkı Sırasını Görebilirsiniz__
**\`$getServerVar[Prefix]ses\`** __Bu Sayede Şarkının Sesini Arttıralirsiz__
**\`$getServerVar[Prefix]panel\`** __Bu Sayede Müzik Panelini Açarsınız__
**\`$getServerVar[Prefix]np\`** __Bu Sayede Şuan Çalan Şarkıya Bakarsınız__
$customEmoji[azerotwo;$getVar[emojisw2]][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
	name: 'eğlence',
	code: `
   $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]
   $description[**Eğlence Komutlarıma Hoşgeldin** $customEmoji[zttakla;$getVar[emojisw2]]
   
**\`$getServerVar[Prefix]stonks\`** __Bu Sayede Stonks Apisini Kullanabilirsiniz__
**\`$getServerVar[Prefix]not-stonks\`** __Bu Sayede Not Stonks Apisini Kullanabilirsiniz__
**\`$getServerVar[Prefix]aşkölç\`** __Bu Sayede Etiketli Kişiyle Aşkınızı Ölçersiniz__
**\`$getServerVar[Prefix]sor\`** __Bu Sayede Bota Soru Sorabilirsiniz__
**\`$getServerVar[Prefix]kaçcm\`** __Bu Sayede Malafatınızı Ölçebilirsiniz__
$customEmoji[azerotwo;$getVar[emojisw2]][Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)]
$footer[Destek Sunucuma Gelmek İçin  $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
});

bot.command({
name:"premium-menü",
code:`
$title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]
$description[**Premiun Menüme Hoşgeldin $customEmoji[ztmoneypanda;$getVar[emojisw2]]**

**\`$getServerVar[Prefix]tagrol\`**: __Bu Sayede Tag Alan Üyelere Rol Verilir__
**\`$getServerVar[Prefix]herkese-rol-ver\`**: __Bu Sayede Sunucudaki Her Üyeye Rol Verebilirsiniz__
**\`$getServerVar[Prefix]herkesten-rol-al\`**: __Bu Sayede Sunucudaki Her Üyeden Rol Alabilirsiniz__
**\`$getServerVar[Prefix]panel\`**: __Bu Sayede Müzik Panelini Açabilir Daha Rahat Bir Dinleme Keyfi Yaşalirsiniz__
**\`$getServerVar[Prefix]ses\`**: __Bu Sayede Çalan Müziğin Sesini Ayarlarsınız__
**\`$getServerVar[Prefix]prefix\`**: __Bu Sayede Sunucunuza Özel Prefix Ayarlayabilirsiniz__

**Premium Üye Olmak İçin Destek Sunucumuza Gelin Ve <@$botOwnerID> 'e Dm Den Ulaşın**
[Beni davet etmek için tıkla](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
`
})

bot.command({
  name:"diğer-sistemler",
  aliases: ['diğer'],
  code:`
  $title[Ohayoo $customEmoji[ztpikachu;$getVar[emojisw2]]]
  $description[**Diğer Sistemlerime Hoşgeldin $customEmoji[zttick_green;$getVar[emojisw2]]**
  
**\`$getServerVar[Prefix]tavsiye-sistemi\`** __Bu Sayede Tavsiye Sistemi Komutlarına Erişebilirsiniz__
**\`$getServerVar[Prefix]uyarı-sistemi\`** __Bu Sayefe Uyarı Sistemi Komutlarına Erişebilirsiniz__
**\`$getServerVar[Prefix]mute-sistemi\`** __Bu Sayede Mute Sistemi Komutlarına Erişebilirsiniz__
[Beni davet etmek için tıkla](https://discord.com/oauth2/authoriza?client_id=$clientID$scope=bot&permission=8)]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın;$authorAvatar]
$color[FFCCFF]
  `
})