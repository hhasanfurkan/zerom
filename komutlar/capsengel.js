module.exports = {
    name: "caps-engel",
    code: `
    $if[$message[1]==aç] 
    $setServerVar[caps;açık]
    $setServerVar[capsyuzde;$message[2]]
    $customEmoji[ptick;$getVar[emojisw1]] | Artık Mesajların Harf Sayısının \`%$message[2]\`'Den Fazlası Büyük Harf İse Mesaj Silinicek
    $onlyIf[$getServerVar[caps]!=açık;$customEmoji[pcross;$getVar[emojisw1]] | Bu Sistem Zaten Açık] 
    $onlyIf[$message[2]<=100;$customEmoji[pcross;$getVar[emojisw1]] | Ayarlanan Yüzde 100'ün Üstünde Olamaz]
    $onlyIf[$isNumber[$message[2]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bir Sayı Girmelisin]
    $onlyIf[$message[2]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]caps-engel aç 50]  

    $elseIf[$message[1]==kapat]
    $setServerVar[caps;kapalı]
    $setServerVar[capsyuzde;]
    $customEmoji[ptick;$getVar[emojisw1]] | Artık Büyük Harfle Yazan Kullanıcılar Uyarılmayacak
    $onlyIf[$message[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]caps-engel kapat]  
    $onlyIf[$getServerVar[caps]!=kapalı;$customEmoji[pcross;$getVar[emojisw1]] | Bu Sistem Kapalı Zaten]
    $endelseIf
    $else
    $customEmoji[pcross;$getVar[emojisw1]] | Lütfen Geçerli Bir Eylem Yazın \`$getServerVar[Prefix]caps-engel\` **\`aç\`** | \`$getServerVar[Prefix]caps-engel\` **\`kapat\`**
    $endif
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
    `
}
