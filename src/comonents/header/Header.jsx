import profile from '../../../public/images/profile.png'


const Header = () => {


    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl'>
            <h1>this is header </h1>

            <img src={profile} alt="" />
        </header>
    );
};

export default Header;