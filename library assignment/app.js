

let books = [
  {id:1,author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', qty: 2},
  {id:2,author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', qty: 2},
  {id:3,author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', qty: 1},
  {id:4,author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', qty: 1},
  {id:5,author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', qty: 1}
]
// issued books

let issuedbooks=[]
let users=[
{	name:'rajbir',accountno:'12345',pass:12345,
}
]

let searchbookslist=[]

// current date
var issuedate=new Date();
var day= issuedate.getDate();
var  month=issuedate.getMonth();
var year=issuedate.getFullYear();

// function to count next 15 days
function getDatePlusDays(dt, days) {
	return new Date(dt.getTime() + (days * 86400000));
}

var duedate=getDatePlusDays(issuedate,15)
var dueday= duedate.getDate();
var  duemonth=duedate.getMonth();
var dueyear=duedate.getFullYear();





var ida=0;
function changepanel()
{
	document.getElementById('issuedbooks').style.display='none'
	document.getElementById('afterlogin').style.display = 'none'
	document.getElementById('regstudent').style.display = 'none'
}

function newregistration(){

	document.getElementById('loginpanel').style.display = 'none'
	document.getElementById('regstudent').style.display = 'block'

}

function viewlogin(){

	document.getElementById('loginpanel').style.display = 'block'
	document.getElementById('regstudent').style.display = 'none'

}

function login()
{
	let usertxt=document.getElementById('studentname').value
	let validuser=users.filter((x)=>x.name==usertxt.toLowerCase())
	let validid=users.filter((x)=>x.pass==document.getElementById('studentpass').value.toLowerCase())
	if(usertxt=='')
	{
		document.getElementById("loginresult").innerHTML="Incorrect Username/Password"

	}
	else if(document.getElementById('studentpass').value=='' )
	{
		document.getElementById("loginresult").innerHTML="Incorrect Username/Password"

	}
	else if(validuser==''   )
	{
		document.getElementById("loginresult").innerHTML="Incorrect Username/Password"

	}
	else if(validid=='' )
	{
		document.getElementById("loginresult").innerHTML="Incorrect Username/Password"
	}


	else{

		document.getElementById('afterlogin').style.display = 'block'
		document.getElementById('loginpanel').style.display = 'none'
		document.getElementById('usernamebox').innerHTML=usertxt
		
		showallbooks();

	}
}

// search book on Enter Key
function keypress(searchtype){	
	document.getElementById("booktxt")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode == 13) {
			document.getElementById("btnclick").click();
		}
	});
}


// Add Book to Library
function addbook(book){
	ida=ida+1    
	books.push({id:ida,
		author:document.getElementById('authorname').value, title:document.getElementById('addBook').value,
		qty:document.getElementById('bookqty').value

	})
	alert("Book is Successfully added")
	document.getElementById('authorname').value=""
	document.getElementById('addBook').value=""
	document.getElementById('bookqty').value=""
}

// Register Student
function addstudent(){
	if(document.getElementById('studentnametxt').value!="" && document.getElementById('studentpasstxt').value!="" && 
		document.getElementById('studentrolltxt').value!="")
	{
	users.push({
		name:document.getElementById('studentnametxt').value,
		pass:document.getElementById('studentpasstxt').value,
		id:document.getElementById('studentrolltxt').value
	})

	alert("Student Successfully added")
	document.getElementById('studentnametxt').value=""
	document.getElementById('studentpasstxt').value=""
	document.getElementById('studentrolltxt').value=""
}
else{
	alert("Please Enter All the fields")
}
}


// Show All the books


function showallbooks(){
	let aName=document.getElementById('booktxt').value
	let searchbookslist=books.filter((x)=>x.title.toLowerCase().match(aName.toLowerCase()) ||
		x.genre.toLowerCase().match(aName.toLowerCase() ))
	document.getElementById('showallbooks').innerHTML=""
	if(searchbookslist.length>0)
	{
		var bookid=0
		if(bookid==0)
		{

			let trow=document.createElement('tr');
			let srnoh=document.createElement('td')
			let titleh=document.createElement('td')
			let authorh=document.createElement('td')
			let genreh=document.createElement('td')
			let qtyh=document.createElement('td')


			let srno=document.createTextNode('SR NO')
			let title=document.createTextNode('TITLE')
			let author=document.createTextNode('AUTHOR')
			let genre=document.createTextNode('GENRE')
			let qty=document.createTextNode('QTY')

			srnoh.appendChild(srno)
			titleh.appendChild(title)
			authorh.appendChild(author)
			genreh.appendChild(genre)
			qtyh.appendChild(qty)

			trow.appendChild(srnoh)
			trow.appendChild(titleh)
			trow.appendChild(authorh)
			trow.appendChild(genreh)
			trow.appendChild(qtyh)
			document.getElementById('showallbooks').appendChild(trow);
		}

		searchbookslist.forEach((x)=>{
			bookid=bookid+1
			let trowd=document.createElement('tr');
			let srnohd=document.createElement('td')
			let titlehd=document.createElement('td')
			let authorhd=document.createElement('td')
			let genrehd=document.createElement('td')
			let qtyhd=document.createElement('td')
			let borrowd=document.createElement('td')
			let borrowhdi=document.createElement('INPUT');

			let srnod=document.createTextNode(bookid)
			let titled=document.createTextNode(x.title)
			let authord=document.createTextNode(x.author)
			let genred=document.createTextNode(x.genre)
			let qtyd=document.createTextNode(x.qty)
			borrowhdi.setAttribute('value','Borrow Book');
			borrowhdi.setAttribute('type','button');
			borrowhdi.setAttribute('id',x.id)
			borrowhdi.setAttribute('onclick','borrowbook(this)')

			srnohd.appendChild(srnod)
			titlehd.appendChild(titled)
			authorhd.appendChild(authord)
			genrehd.appendChild(genred)
			qtyhd.appendChild(qtyd)
			borrowd.appendChild(borrowhdi)

			trowd.appendChild(srnohd)
			trowd.appendChild(titlehd)
			trowd.appendChild(authorhd)
			trowd.appendChild(genrehd)
			trowd.appendChild(qtyhd)
			trowd.appendChild(borrowd)
			document.getElementById('showallbooks').appendChild(trowd);

		} 	)


}
else{
	document.getElementById('showallbooks').innerHTML="No Book Available"
}
}


function borrowbook(book){
	
	let bookid = book.getAttribute('id');
	let booktissue = books.filter(function (obj) {
		return obj.id == bookid;
	})[0];

	if (booktissue)
	{
		if(booktissue.qty<1){
			alert("Sorry Book is not available")
		}
		else
		{
			booktissue.qty= booktissue.qty - 1
			issuedbooks.push({ stuname: document.getElementById('usernamebox').value, book_name:booktissue.title, date:day+"/"+month+"/"+year,duedate:dueday+"/"+duemonth+"/"+dueyear });
			alert("book is issued")
			document.getElementById('showallbooks').innerHTML=""
			showallbooks()
			showissuedbooks()
		}
	}


}
// show issued Books

function  showissuedbooks(){
	document.getElementById('issuedbooks').style.display='block'
	document.getElementById('issuedstatus').innerHTML="Issued Books"
	
	document.getElementById('issuedbooks').innerHTML=""
	var bookid=0
	if(bookid==0)
	{
		let trow=document.createElement('tr');

		let srnoh=document.createElement('td')
		let titleh=document.createElement('td')
		let issueh=document.createElement('td')
		let dueh=document.createElement('td')


		let srno=document.createTextNode('SR NO')
		let title=document.createTextNode('TITLE')
		let issue=document.createTextNode('ISSUED DATE')
		let dueue=document.createTextNode('DUE DATE')


		srnoh.appendChild(srno)
		titleh.appendChild(title)
		issueh.appendChild(issue)
		dueh.appendChild(dueue)

		trow.appendChild(srnoh)
		trow.appendChild(titleh)
		trow.appendChild(issueh)
		trow.appendChild(dueh)

		document.getElementById('issuedbooks').appendChild(trow);
	}

	issuedbooks.forEach((x)=>{
		bookid=bookid+1
		let trowd=document.createElement('tr');

		let srnohd=document.createElement('td')
		let titlehd=document.createElement('td')
		let issuedate=document.createElement('td')
		let duedate=document.createElement('td')
		let borrowd=document.createElement('td')
		let borrowhdi=document.createElement('INPUT');

		let srnod=document.createTextNode(bookid)
		let titled=document.createTextNode(x.book_name)
		let issuedated=document.createTextNode(x.date)
		let duedated=document.createTextNode(x.duedate)

		borrowhdi.setAttribute('value','Return Book');
		borrowhdi.setAttribute('type','button');
		borrowhdi.setAttribute('id',x.id)
		borrowhdi.setAttribute('onclick','returnbook(this)')



		srnohd.appendChild(srnod)
		titlehd.appendChild(titled)
		issuedate.appendChild(issuedated)
		duedate.appendChild(duedated)
		borrowd.appendChild(borrowhdi)

		trowd.appendChild(srnohd)
		trowd.appendChild(titlehd)
		trowd.appendChild( issuedate)
		trowd.appendChild( duedate)

		document.getElementById('issuedbooks').appendChild(trowd);

	} 	)

}

// Return Book

function returnbook(book){
	
	let bookid = book.getAttribute('id');
	let booktissue = issuedbooks.filter(function (obj) {
		return obj.id == bookid;
	})[0];
	let bookreturn=books.filter(function (obj) {
		return obj.id == bookid;
	})[0];

	if (booktissue)
	{
		if(booktissue.qty<1){
			alert("Sorry Book is not Returnable")
		}
		else
		{
			booktissue.qty= booktissue.qty - 1
			bookreturn.qty=bookreturn.qty+1
			alert("book is Returned")
			document.getElementById('showallbooks').innerHTML=""
			showallbooks()
			showissuedbooks()
		}
	}


}
// logout
function logout(){
	location.reload();
}