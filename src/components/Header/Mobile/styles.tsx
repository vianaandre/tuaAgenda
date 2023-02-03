import styled from 'styled-components';

export const ContainerMobile = styled.div`
    width: 100%;
    display: none;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
    }
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};
        p {
            font-weight: 600;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        }
        div {
            display: flex;
            flex-direction: column;
            gap: 4px;
            div {
                width: ${({ theme }) => theme.spacing(3)};
                height: 3px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            }
        }
    }
`;

export const ContainerMobileMenu = styled.nav<{
    showMenu: boolean;
}>`
    position: fixed;
    width: 100vw;
    max-width: 524px;
    height: 100vh;
    min-height: 500px;
    top: 0px;
    right: 0px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    z-index: ${({ theme }) => theme.zIndex.MENU};
    transition: 400ms;
    transform: translateX(${({ showMenu }) => (showMenu ? '0px' : '100vw')});
    @media(max-width: 524px) {
        left: 0;
    }
    div.header {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        button.close_button {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            p {
                font-weight: 600;
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            }
        }
        button.button_location {
            display: flex;
            gap: ${({ theme }) => theme.spacing(1)};
            p.small {
                color: ${({ theme }) => theme.colors.GREY[950]};
                font-weight: 500;
            }
        }
    }
    div.content {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)};
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: ${({ theme }) => theme.spacing(6)};
            gap: ${({ theme }) => theme.spacing(2)};
            li:first-child {
                margin-bottom: ${({ theme }) => theme.spacing(3)};
            }
            li {
                width: 100%;
                display: flex;
                justify-content: center;
                a {
                    width: 100%;
                    max-width: 220px;
                }
            }
        }
    }
`;