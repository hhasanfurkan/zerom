module.exports = {
name:"yetkilerim",
code:`
$author[Ohayoo;$authorAvatar]
$description[__Sunucu İzinleri:__ 
**Yönetici**: $replaceText[$replaceText[$hasPerms[$authorID;admin];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Sunucuyu Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;manageserver];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Rolleri Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;manageroles];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Kanalları Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;managechannels];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Webhookları Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;managewebhooks];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Mesajları Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;managemessages];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Emojileri Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;manageemojis];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Kullanıcı Adlarını Yönet**: $replaceText[$replaceText[$hasPerms[$authorID;managenicknames];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Üyeleri At**: $replaceText[$replaceText[$hasPerms[$authorID;kick];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Üyeleri Yasakla**: $replaceText[$replaceText[$hasPerms[$authorID;ban];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Sunucu Bilgilerini Görüntüle**: $replaceText[$replaceText[$hasPerms[$authorID;viewguildinsights];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Denetim Kaydını Görüntüle**: $replaceText[$replaceText[$hasPerms[$authorID;viewauditlog];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Kanalları Görüntüle**: $replaceText[$replaceText[$hasPerms[$authorID;viewchannel];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Herkesten Bahset**: $replaceText[$replaceText[$hasPerms[$authorID;mentioneveryone];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Tepki Ekle**: $replaceText[$replaceText[$hasPerms[$authorID;addreactions];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Harici Emoji Kullan**: $replaceText[$replaceText[$hasPerms[$authorID;externalemojis];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Mesaj Gönder**: $replaceText[$replaceText[$hasPerms[$authorID;sendmessages];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Mesaj Geçmişini Oku**: $replaceText[$replaceText[$hasPerms[$authorID;readmessages];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Bağlantı Yerleştir**: $replaceText[$replaceText[$hasPerms[$authorID;embedlinks];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Dosya Gönder**: $replaceText[$replaceText[$hasPerms[$authorID;attachfiles];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Metin Okuma Mesajı Gönder**: $replaceText[$replaceText[$hasPerms[$authorID;sendtts];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Davet Oluştur**: $replaceText[$replaceText[$hasPerms[$authorID;createinvite];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Slash Komutlarını Kullan**: $replaceText[$replaceText[$hasPerms[$authorID;usevad];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Bağlan**: $replaceText[$replaceText[$hasPerms[$authorID;connect];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Konuş**: $replaceText[$replaceText[$hasPerms[$authorID;speak];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Ekran Paylaş (Video)**: $replaceText[$replaceText[$hasPerms[$authorID;stream];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Öncelikli Konuşmacı**: $replaceText[$replaceText[$hasPerms[$authorID;priorityspeaker];yes;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Üyeleri Sustur**: $replaceText[$replaceText[$hasPerms[$authorID;mutemembers];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Bağlantıyı Kes**: $replaceText[$replaceText[$hasPerms[$authorID;deafenmembers];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Üyeleri Taşı**: $replaceText[$replaceText[$hasPerms[$authorID;movemembers];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]

__Zero Two İzinleri:__
**Uyarı At**: $replaceText[$replaceText[$hasRole[$authorID;$getServerVar[wyetkili]];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Mute At**: $replaceText[$replaceText[$hasRole[$authorID;$getServerVar[myrol]];true;$customEmoji[ptick;$getVar[emojisw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]]
**Kayıt Et**: $replaceText[$replaceText[$hasRole[$authorID;$getServerVar[kyetkili]];true;$customEmoji[ptick;$getVar[emojsw1]];-1];false;$customEmoji[pcross;$getVar[emojisw1]]
]
$footer[$userTag;$authorAvatar]
$thumbnail[$authorAvatar]
$color[FFCCFF]
`
} 
