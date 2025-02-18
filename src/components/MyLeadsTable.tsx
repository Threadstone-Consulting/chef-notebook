"use client";

import { useState, useEffect } from "react";
import apiClient from "@/libs/api";
import DomainButtonPopover from "./DomainButtonPopover";
import { useSession } from "next-auth/react";
export const dynamic = "force-dynamic";

export default function MyLeadsTable() {

    const { data: session } = useSession()

    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMSG, setErrorMSG] = useState<string>("");
    const firstDomain = session?.user?.domains[0]
    const [domain, setDomain] = useState<string>()

    useEffect(() => {
        async function fetchAPI() {
            try {
                if (domain) {
                    const data: any = await apiClient.post("/lead/get-leads", { domain });
                    setLeads(data.leads)
                }

            } catch (e) {
                console.error(e);
                if (e.message) {
                    setErrorMSG(e.message)
                }
            }
        }

        setIsLoading(true)
        fetchAPI()
        setIsLoading(false)

    }, [domain])


    return (
        <div className="">
            {isLoading ?
                <div className="flex flex-col items-center">
                    <span className="text-black loading loading-spinner loading-lg"></span>
                </div>
                :
                errorMSG ?
                    <div className="flex flex-col items-center text-red-600 border-red-600 border-2 font-bold rounded-full">
                        <span className="">{errorMSG}</span>
                    </div>

                    :
                    <div className="">
                        <DomainButtonPopover className="m-4" domains={session?.user?.domains} setDomainState={setDomain} domainState={domain} />
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Retrieval Date</th>
                                    <th>Record ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead, index) => {
                                    const TimeDate = new Date(lead.createdAt)
                                    return (
                                        <tr key={lead.email}>
                                            <th>{index + 1}</th>
                                            <td>{lead.email}</td>
                                            <td>{TimeDate.toDateString()}</td>
                                            <td>{lead.id}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table >
                    </div>
            }
        </div >
    );
}

