import React, { useState, useEffect } from "react";
import PeopleItem from './PeopleItem';
import "./PeopleList.css";

//Images for every person
import AlvinImage from '../Assets/Alvin.jpg';
import ArlImage from '../Assets/Arl.jpg';
import AshaImage from '../Assets/Asha.jpg';
import BonImage from '../Assets/Bon.jpg';
import CeleImage from '../Assets/Cele.jpg';
import DwayneImage from '../Assets/Dwayne.jpg';
import EmmettImage from '../Assets/Emmett.jpg';
import GeekImage from '../Assets/Geek.jpg';
import HarrietImage from '../Assets/Harriet.jpg';
import JayImage from '../Assets/Jay.jpg';
import JustaImage from '../Assets/Justa.jpg';
import KeishaImage from '../Assets/Keisha.jpg';
import LexyImage from '../Assets/Lexy.jpg';
import LilyImage from '../Assets/Lily.jpg';
import LolaImage from '../Assets/Lola.jpg';
import LuthorImage from '../Assets/Luthor.jpg';
import MikeImage from '../Assets/Mike.jpg';
import NayImage from '../Assets/Nay.jpg';
import NaziImage from '../Assets/Nazi.jpg';
import NickImage from '../Assets/Nick.jpg';
import NinaImage from '../Assets/Nina.jpg';
import OmanImage from '../Assets/Oman.jpg';
import RomanImage from '../Assets/Roman.jpg';
import RoxanImage from '../Assets/Roxan.jpg';
import TashaImage from '../Assets/Tasha.jpg';
import UrsulaImage from '../Assets/Ursula.jpg';
import WhiteImage from '../Assets/White.jpg';
import LizImage from '../Assets/Liz.jpg';
import TimImage from '../Assets/Tim.jpg';
import KyleImage from '../Assets/Kyle.jpg';

const DefaultImage = ''; 

function PeopleList({ people,onSelect }) {
    const [filteredPeople, setFilteredPeople] = useState(people);
    const [searchCriteria, setSearchCriteria] = useState({
        age: '',
        gender: ''
    });

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        filterPeople();
    }, [searchCriteria]); 
    <h5>Liked people</h5>
    const filterPeople = () => {
        const filtered = people.filter(person => {
            // Filter based on age
            if (searchCriteria.age !== '' && person.age !== parseInt(searchCriteria.age)) {
                return false;
            }
            // Filter based on gender
            if (searchCriteria.gender !== '' && person.gender.toLowerCase() !== searchCriteria.gender.toLowerCase()) {
                return false;
            }
            return true;
        });
        setFilteredPeople(filtered);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                name="age"
                placeholder="Search by age"
                value={searchCriteria.age}
                onChange={handleSearchChange}
            />
            <input
                type="text"
                name="gender"
                placeholder="Search by gender"
                value={searchCriteria.gender}
                onChange={handleSearchChange}
            />
            <div className="scroll-container">
                {filteredPeople.map(person => {
                    let imageSrc;
                    switch (person.name) {
                        case 'Alvin':
                            imageSrc = AlvinImage;
                            break;
                        case 'Arl':
                            imageSrc = ArlImage;
                            break;
                        case 'Asha':
                            imageSrc = AshaImage;
                            break;
                        case 'Bon':
                            imageSrc = BonImage;
                            break;
                        case 'Cele':
                            imageSrc = CeleImage;
                            break;
                        case 'Dwayne':
                            imageSrc = DwayneImage;
                            break;
                        case 'Emmett':
                            imageSrc = EmmettImage;
                            break;
                        case 'Geek':
                            imageSrc = GeekImage;
                            break;
                        case 'Harriet':
                            imageSrc = HarrietImage;
                            break;
                        case 'Jay':
                            imageSrc = JayImage;
                            break;
                        case 'Justa':
                            imageSrc = JustaImage;
                            break;
                        case 'Keisha':
                            imageSrc = KeishaImage;
                            break;
                        case 'Lexy':
                            imageSrc = LexyImage;
                            break;
                        case 'Lily':
                            imageSrc = LilyImage;
                            break;
                        case 'Lola':
                            imageSrc = LolaImage;
                            break;
                        case 'Luthor':
                            imageSrc = LuthorImage;
                            break;
                        case 'Mike':
                            imageSrc = MikeImage;
                            break;
                        case 'Nay':
                            imageSrc = NayImage;
                            break;
                        case 'Nazi':
                            imageSrc = NaziImage;
                            break;
                        case 'Nick':
                            imageSrc = NickImage;
                            break;
                        case 'Nina':
                            imageSrc = NinaImage;
                            break;
                        case 'Oman':
                            imageSrc = OmanImage;
                            break;
                        case 'Roman':
                            imageSrc = RomanImage;
                            break;
                        case 'Roxan':
                            imageSrc = RoxanImage;
                            break;
                        case 'Tasha':
                            imageSrc = TashaImage;
                            break;
                        case 'Ursula':
                            imageSrc = UrsulaImage;
                            break;
                        case 'White':
                            imageSrc = WhiteImage;
                            break;
                        case 'Liz':
                            imageSrc = LizImage;
                            break;
                        case 'Tim':
                            imageSrc = TimImage;
                            break;
                        case 'Kyle':
                            imageSrc = KyleImage;
                            break;
                        default:
                            imageSrc = DefaultImage;
                            break;
                    }
                    return (
                        <div className="card-container">
                            <PeopleItem {...person} imageSrc={imageSrc} key={person.name}  onSelect={onSelect} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default PeopleList;