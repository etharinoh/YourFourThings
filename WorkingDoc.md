* Planning document for Your Four Things
* 
* Models from Xamarin:
* 
* Four Things:
*       public User owner { get; set; }
*       public DateTime date { get; set; }
* 
*       public string thingOne { get; set; }
*       public string thingTwo { get; set; }
*       public string thingThree { get; set; }
*       public string thingFour { get; set; }
*        
*       public string tags { get; set; } //These will be separated by some delimited for each tag
*       
*       public string reflection { get; set; } //A long string ofg the users reflection on the day

* Weekly / Todo
        public User owner { get; set; }
        public string toDoID { get; set; }
        public Boolean complete { get; set; }

    item:
         public User owner { get; set; }
        public string toDoID { get; set; }
        public Boolean complete { get; set; }

* Users
        public string username { get; set; }
        public string passwordHash { get; }

* [x] - Create a user
* [x] - Login as user
* [ ] - Change password


* [x] - Have Database inteeraction


* [x] - Have fourthings output porperly
* [x] - Create fourthings properly
* [x] - Add tags
* [x] - Add Reflecxtion for the day
* [x] - Date picker to see old dates or set new ones


* [ ] - Have weeks plans be viewable
* [ ] - Have weeks plans be creatable
* [ ] - if all in week plan item is done, tick header
* [ ] - Moddal for reminds removing tasks and remove group



* [ ] - search can be done on journals
* [ ] -  search can be done on things from past
* [ ] - search can be done on current weeks items
* [ ] - search can be done on tags


Journals and journal entry should use options show header


<ion-icon name="clipboard-outline"></ion-icon> Todo
<ion-icon name="create-outline"></ion-icon> Journal
<ion-icon name="today-outline"></ion-icon>  Things
<ion-icon name="settings-outline"></ion-icon> settings
<ion-icon name="search-outline"></ion-icon> search
