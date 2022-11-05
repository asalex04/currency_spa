import classNames from "classnames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "../AppLink/AppLink";
import {RoutePath} from "../../config/routeConfig";
import {useAppDispatch} from "../../store/store";
import {useEffect, useState} from "react";
import {fetchCurrency, fetchRates} from "../../api/CurrencyApi";
import {getCurrencies, getRates} from "../../store/reducers/CurrencySlice";
import {Loader} from "../Loader/Loader";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
            const currencies = await fetchCurrency()
            const rates = await fetchRates()
            await dispatch(getRates(rates.data.rates))
            await dispatch(getCurrencies(currencies.data.currencies))
            setLoading(false)
        }
        fetchData()

    }, [])
    return (
        <>
            {loading ?
                <Loader/>
                :
                <div className={classNames(cls.navbar, {}, [className])}>
                    <AppLink
                        to={RoutePath.rates}
                        theme={AppLinkTheme.PRIMARY}
                        className={cls.item}
                    >
                        <span className={cls.link}>Rates</span>
                    </AppLink>
                    <AppLink
                        to={RoutePath.calculator}
                        theme={AppLinkTheme.PRIMARY}
                        className={cls.item}
                    >
                        <span className={cls.link}>Calculator</span>
                    </AppLink>
                </div>
            }
        </>
    );
};

