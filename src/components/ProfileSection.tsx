import { useEffect, useState } from 'react';
import { getProfile, updateProfile } from '../services/api';

interface Profile {
    name: string;
    email: string;
    phone: string;
}

const ProfileSection = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        getProfile().then((response) => setProfile(response.data));
    }, []);

    const handleSave = () => {
        if (profile) {
            updateProfile(profile).then(() => alert('Profile updated successfully!'));
        }
    };

    return (
        <div className="p-4 border rounded-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
            {profile && (
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block font-semibold">Name</label>
                        <input
                            className="p-2 border rounded w-full"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Email</label>
                        <input
                            className="p-2 border rounded w-full"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Phone</label>
                        <input
                            className="p-2 border rounded w-full"
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded" onClick={handleSave}>Save Changes</button>
                </div>
            )}
        </div>
    );
};

export default ProfileSection;
