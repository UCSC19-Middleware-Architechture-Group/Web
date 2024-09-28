import { useEffect, useState } from 'react';
import { getServices } from '../services/api';

interface ServicePackage {
    name: string;
    dataLimit: string;
    callLimit: string;
    smsLimit: string;
}

const ServicesSection = () => {
    const [services, setServices] = useState<ServicePackage[]>([]);
    const [currentPackage, setCurrentPackage] = useState<ServicePackage | null>(null);

    useEffect(() => {
        getServices().then((response) => {
            setCurrentPackage(response.data.currentPackage);
            setServices(response.data.availablePackages);
        });
    }, []);

    return (
        <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            {currentPackage && (
                <div className="p-4 border rounded-lg mb-4 bg-white">
                    <h3 className="font-semibold">Current Package</h3>
                    <p>{currentPackage.name}</p>
                    <p>Data: {currentPackage.dataLimit}</p>
                    <p>Calls: {currentPackage.callLimit}</p>
                    <p>SMS: {currentPackage.smsLimit}</p>
                </div>
            )}
            <h3 className="font-semibold mb-2">Available Packages</h3>
            <div className="grid grid-cols-3 gap-4">
                {services.map((pkg) => (
                    <div key={pkg.name} className="p-4 border rounded-lg bg-white">
                        <h4 className="font-bold">{pkg.name}</h4>
                        <p>Data: {pkg.dataLimit}</p>
                        <p>Calls: {pkg.callLimit}</p>
                        <p>SMS: {pkg.smsLimit}</p>
                        <button className="bg-green-600 text-white p-2 rounded mt-2">Activate</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
