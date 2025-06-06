
import { useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Settings = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: "",
    phone: "",
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match!");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful update
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      toast.success("Password updated successfully!");
    } catch (error) {
      console.error("Failed to update password:", error);
      toast.error("Failed to update password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-melophile-800">Settings</h1>
        <p className="text-gray-600">Update your account preferences and details</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="max-w-2xl">
            <form onSubmit={handleProfileSubmit}>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account information and personal details.</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={profileData.name} 
                    onChange={handleProfileChange}
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={profileData.email} 
                    onChange={handleProfileChange}
                    placeholder="your.email@example.com" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input 
                      id="age" 
                      name="age" 
                      type="number"
                      value={profileData.age} 
                      onChange={handleProfileChange}
                      placeholder="Your age" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={profileData.phone} 
                      onChange={handleProfileChange}
                      placeholder="Your phone number" 
                    />
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="bg-melophile-600 hover:bg-melophile-700" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="max-w-2xl">
            <form onSubmit={handlePasswordSubmit}>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Update your password to secure your account.</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input 
                    id="currentPassword" 
                    name="currentPassword" 
                    type="password" 
                    value={passwordData.currentPassword} 
                    onChange={handlePasswordChange}
                    placeholder="••••••••" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input 
                    id="newPassword" 
                    name="newPassword" 
                    type="password" 
                    value={passwordData.newPassword} 
                    onChange={handlePasswordChange}
                    placeholder="••••••••" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    value={passwordData.confirmPassword} 
                    onChange={handlePasswordChange}
                    placeholder="••••••••" 
                  />
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="bg-melophile-600 hover:bg-melophile-700" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Password"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
