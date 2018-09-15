import * as React from 'react';
import * as SUI from 'semantic-ui-react';

export class Menu extends React.Component {
    
    render() {
        return (
            <div>
                <SUI.List.Content>
                    <a href="">About me</a>
                </SUI.List.Content>
                <SUI.List.Content>
                    <a href="https://vk.com">VK</a>
                </SUI.List.Content>
                <SUI.List.Content>
                    <a href="https://etsy.com">Etsy</a>
                </SUI.List.Content>
                <SUI.List.Content>
                    <a href="https://livemaster.ru">Livemaster</a>
                </SUI.List.Content>
            </div>
        );
    }
    
}