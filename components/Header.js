import Image from 'next/image'
function Header() {
  return (
    <header>
      {/* left */}
      <div>
          <Image 
            src ='https://links.papareact.com/qd3'
            layout='fill'
          />
      </div>
      {/* middle */}
      <div></div>
      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
