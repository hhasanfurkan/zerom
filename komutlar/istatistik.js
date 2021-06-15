module.exports = {
  name:"istatistik",
  aliases: ["i" , 'istatiks' , 'istatistikler' , 'istatistk'],
  code:`
  $author[Ohayoo;$authorAvatar]
  $description[$thumbnail[$userAvatar[$clientID]]
 \`\`\`js
Bilgilerim\`\`\`
$customEmoji[owner_case;$getVar[emojisw1]] **Darling:** \`$userTag[$botOwnerID]\` | <@$botOwnerID>
$customEmoji[adeveloper]**Geliştiricilerim:** \`$userTag[539843855567028227]\` , \`$userTag[828327187073466368]\` , \`$userTag[655981789407346718]\`
\`\`\`js
İstatisklerim\`\`\`
$customEmoji[zttakla;$getVar[emojisw2]] **Oluşturulma Tarihim:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[797185016685395979;time];and;Ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1]\`
$customEmoji[high;$getVar[emojisw1]] **Pingim:**  \`$pingms\`
$customEmoji[ztyukleniyor3;$getVar[emojisw2]] **Uptime:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;1];h; Saat;1];m; Dakika;1];d; Gün;1];w; Hafta;1]\`
$customEmoji[ztdans7;$getVar[emojisw2]] **Komut Sayım:** \`$commandsCount\`
$customEmoji[ztkullanc;$getVar[emojisw2]] **Toplam Kullanıcım:** \`$allMembersCount\`
$customEmoji[zthawlipika;$getVar[emojisw2]] **Toplam Sunucu:** \`$serverCount\`
$customEmoji[text_channel;$getVar[emojisw1]] **Toplam Yazı Kanalı Sayım:** \`$allChannelsCount[text]\`
$customEmoji[voice_channel;$getVar[emojisw1]] **Toplam Ses Kanalı Sayım:** \`$allChannelsCount[voice]\`
$customEmoji[category;$getVar[emojisw1]] **Toplam Kategori Sayım:** \`$allChannelsCount[category]\`
\`\`\`js
Sistem\`\`\`
$customEmoji[ztyukleniyor;$getVar[emojisw2]]**Toplam CPU kullanımı:** \`%$cpu\`
$customEmoji[ztyukleniyor2;$getVar[emojisw2]] **Toplam RAM kullanımı:** \`$ramMB\`
$customEmoji[ztaoijs;$getVar[emojisw2]] **Kütüphanem:** \`AOİ.JS v$packageVersion\`
\`\`\`js
Linkler\`\`\`
[Davet Linkim!](
https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8) | [Destek Sunucum!](https://discord.gg/vDNp6sKAKV) |  [Web Sitem!](https://zerotwodiscordbot.tr.gg/)]
$color[FFCCFF]
$footer[Zero Two;$authorAvatar]
  `
}