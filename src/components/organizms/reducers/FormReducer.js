import axios from "axios";

export const initialState =
    {
        name: "",
        email: "",
        phone: "",
        type: "",
        date: "",
        first_date: "",
        last_date: "",
        adults_number: "",
        child_number: "",
        youngest_child: "",
        oldest_child: "",
        boys_number: "",
        girls_number: "",
        housing: {
            jurta: false,
            paraszthaz: false,
            apartman: false,
            tetoter: false,
            metzger: false,
            lovas: false,
        },
        food: {
            teljes: false,
            reggeli: false,
            ebed: false,
            vacsora: false,
            tizoraiuzsonna: false,
            langallo: false,
            tuzrako: false,
            intolerants: "",
            intolerants_text: ""
        },
        animator_number: "",
        pool_number: "",
        active_games: {
            bungee: false,
            falmaszas: false,
            karika: false,
            buborekfoci: false,
            lovasproba: false,
            ijaszat: false,
        },
        craftsman: {
            gyongy: false,
            cserep: false,
            batokilas: false,
            kavics: false,
            ytong: false,
        },
        group_program: {
            svab_tajhaz: false,
            kisallat: false,
            pusztakocsi: false,
            suttogo: false,
        },
        teremberles: false
    }

export const initialOurCampsState =
    {
        name: "",
        phone: "",
        email: "",
        type: "",
        date: "",
        message: "",
    }

export const initialBirthdaysState =
    {
        name: "",
        phone: "",
        email: "",
        child_count: "",
        adult_count: "",
        message: "",
    }

export const initialFamilyState =
    {
        name: "",
        phone: "",
        email: "",
        count: "",
        type: "",
        message: "",
    }

export const initialCompanyState =
    {
        name: "",
        company: "",
        phone: "",
        email: "",
        count: "",
        type: "",
        message: "",
    }

export const initialWeddingState =
    {
        name: "",
        email: "",
        phone: "",
        message: "",
    }

export const FormReducer = (state, action) => {

    switch (action.type) {

        case "SET_STATE": {
            return {
                ...state,
                [action.name]: action.value
            }
        }

        case "SET_OBJECT_STATE": {
            return {
                ...state,
                [action.object]: {...state[action.object], [action.name]: action.value}
            }
        }

        default:
            throw new Error("Unexpected action type " + action.type)
    }
}

export async function sendFormData(to, data) {
    return axios.post(`https://verteslovas.herokuapp.com/${to}`, data)
}