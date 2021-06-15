module.exports = {
name:"kullanıcı-bilgi",
code:`
$author[Kullanıcı Bilgi;$authorAvatar]
$description[
$customEmoji[ztkullanc;$getVar[emojisw2]] **| Kullanıcı adı: \`$username[$mentioned[1]]# $discriminator[$mentioned[1]]\`
$customEmoji[label;$getVar[emojisw1]] | ID: \`$mentioned[1]\`
$customEmoji[bot;766764155780726794] | Botmu: \`$replaceText[$replaceText[$isBot[$mentioned[1]];true;Evet;-1];false;Hayır;-1]\`
$customEmoji[ztyukleniyor;$getVar[emojisw2]] | Hesap oluşturulma tarihi: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1];time];year;Yıl;-1];months;Ay;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1] Önce\`
$customEmoji[upvote;$getVar[emojisw1]] | En yüksek rol: <@&$highestRole[$mentioned[1]]>
$customEmoji[downvote;$getVar[emojisw1]] | En düşük rol: <@&$lowestRole[$mentioned[1]]>
$customEmoji[ztadmin;$getVar[emojisw2]] | Yönetici mi: \`$replaceText[$replaceText[$hasPerms[$mentioned[1];admin];false;Hayır;-1];true;Evet;-1]\`
$customEmoji[dm;$getVar[emojisw1]] | DM durumu: \`$replaceText[$replaceText[$isUserDMEnabled[$mentioned[1]];true;Açık;-1];false;Kapalı;-1]\`
$customEmoji[zttick_white;$getVar[emojisw2]] | Rolleri: $userRoles[$mentioned[1];mentions]
$customEmoji[ztmutlunao;$getVar[emojisw2]] | [Profil fotoğrafı]($userAvatar[$mentioned[1]])]
$color[FFCCFF]
$thumbnail[$userAvatar[$mentioned[1]]]
$footer[$username Tarafından İstendi;$authorAvatar]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
`
} 
