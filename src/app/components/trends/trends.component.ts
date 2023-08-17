import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  spotifyIds : string[] = 
                      ["40KlwpvpKEQtZTJgbml8lT",
                      "6l3HvQ5sa6mXTsMTB19rO5",
                      "7dGJo4pcD2V6oG8kP0tJRR",
                      "3uW8VB9ixiNMAJBm7ZsBVT",
                      "4h7NLIlg1oYdEtfQJfyto0",
                      "3jc496ljiyrS3ECrD7QiqL",
                      "3qm84nBOXUEQ2vnTfUTTFC",
                      "1dfeR4HaWDbWqFHLkxsg1d",
                      "4W31XN2JH8mC54NkHdh04s",
                      "12Chz98pHFMPJEknJQMWvI",
                      "5K4W6rqBFWDnAN6FQUkS6x",
                      "1HY2Jd0NmPuamShAr6KMms",
                      "1Xyo4u8uXC1ZmMpatF05PJ",
                      "3TVXtAsR1Inumwj472S9r4",
                      "4i4ALRtQQmFxn3BCIB6iC0",
                      "2ye2Wgw4gimLv2eAKyk1NB",
                      "3nFkdlSjzX9mRTtwJOzDYB",
                      "2yMN0IP20GOaN6q0p0zL5k",
                      "0Ty63ceoRnnJKVEYP0VQpk",
                      "6wWVKhxIU2cEi0K81v7HvP",
                      "2ziB7fzrXBoh1HUPS6sVFn",
                      "5pKCCKE2ajJHZ9KAiaK11H",
                      "2YZyLoL8N0Wb9xBt1NhZWg",
                      "1URnnhqYAYcrqrcwql10ft",
                      "6M2wZ9GZgrQXHCFfjv46we",
                      "7BJjzi0JHyDHAsmVe21dGa",
                      "0L8ExT028jH3ddEcZwqJJ5",
                      "1LZEQNv7sE11VDY3SdxQeN",
                      "6olE6TJLqED3rqDCT0FyPh",
                      "58lV9VcRSjABbAbfWS6skp",
                      "1g4J8P1JWwanNyyXckRX5W"];
  artistIds: string[];
                          
  constructor(){}
  ngOnInit(): void {
    this.artistIds = this.getMultipleRandom(this.spotifyIds);
    console.log(this.artistIds);
  }

  getMultipleRandom(arr) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0,8);
  }
}
