1- Bootstrap Icons yükle,
2- index.html bootstrap cdn kaldırıp paket olarak Bootstrap yükle,
3- Fixed Sidebar benzetmeye çalış,
4- Sidebar menü elemanları için interface oluşturup ilgili component'in ts dosyasında Array oluşturup htmlde bunu ngFor ile dönmeye çalış,
5- Home,Trends,Library sayfaları için component oluştur, sidebarda tıkladığında oraya gitsin,
6- Hangi sayfadaysan o sayfa sidebarda yazısı kalın ben arkaplanı gri olsun,
7- Searchbar component oluşturup tepeye koy, sadece anasayfada olsun
8- Spotify API araştır, Angular ile bağlantısı nasıl kuruluyor, API özellikleri neler, şarkıları çaldırmak için ekstra bir api gerekiyor mu?????


sidebarMenuItems: SidebarMenuItem[] = [
    {
        title: 'Home',
        icon: 'bi-music-note-beamed',
        route: '/home'
        active: true,
    },
    {

    },
    {

    }
]

let menuItem of sidebarMenuItems
menuItem.title
menuItem.icon