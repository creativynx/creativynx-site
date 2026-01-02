import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminPlaceholder = () => {
    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Admin Panel Unavailable</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>The admin panel has been disabled as part of the Supabase removal. Please implement a new backend API to restore functionality.</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminPlaceholder;
