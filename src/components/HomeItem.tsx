import { Button, ListGroup } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

//Home page for "keyboards" (for now named "Home", future change this name)
//added 'navigateTo', which just directly navigates to specified page (i.e. "base" to base.tsx)

type HomeItemProps = {
    name: string
    imgUrl: string
    navigateTo: string;
}


export function HomeItem({ name, imgUrl , navigateTo }: HomeItemProps) {
    const navigate = useNavigate()


    const handleNavigation = () => {
        navigate(navigateTo);
    };

    return (
        <ListGroup className="h-100">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img 
                        src={imgUrl} 
                        alt={name} 
                        style={{ width: '80px', height: '80px', marginRight: '10%', objectFit: 'cover' }} 
                    />
                    <span>{name}</span>
                </div>
                <Button variant="outline-primary" onClick={handleNavigation}>+ Add</Button>
            </ListGroup.Item>
        </ListGroup>
    );
}