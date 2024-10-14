'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BarChart,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  PieChart,
  Send,
  Upload,
  Users,
} from 'lucide-react';

export default function ExpenseManagementPortal() {
  const [role, setRole] = useState('coordinator');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Management Portal</h1>
      <Select value={role} onValueChange={setRole}>
        <SelectTrigger className="w-[280px] mb-4">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="coordinator">Clinical Site Coordinator</SelectItem>
          <SelectItem value="manager">Clinical Operations</SelectItem>
        </SelectContent>
      </Select>

      {role === 'coordinator' ? <CoordinatorView /> : <ManagerView />}
    </div>
  );
}

function CoordinatorView() {
  return (
    <Tabs defaultValue="submit" className="w-full">
      <TabsList>
        <TabsTrigger value="submit">Submit Expense</TabsTrigger>
        <TabsTrigger value="status">Status Tracking</TabsTrigger>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
      </TabsList>
      <TabsContent value="submit">
        <Card>
          <CardHeader>
            <CardTitle>Submit Expense</CardTitle>
            <CardDescription>
              Enter your expense details and upload receipts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expense-type">Expense Type</Label>
                  <Select>
                    <SelectTrigger id="expense-type">
                      <SelectValue placeholder="Select expense type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="meals">Meals</SelectItem>
                      <SelectItem value="supplies">Supplies</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter expense description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="receipt">Upload Receipt</Label>
                <Input id="receipt" type="file" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>
              <Send className="mr-2 h-4 w-4" /> Submit Expense
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="status">
        <Card>
          <CardHeader>
            <CardTitle>Expense Status</CardTitle>
            <CardDescription>
              Track the status of your submitted expenses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-10-01</TableCell>
                  <TableCell>Travel to UCSF</TableCell>
                  <TableCell>$550.00</TableCell>
                  <TableCell>
                    <Badge variant="default">Paid</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-10-02</TableCell>
                  <TableCell>Taxi</TableCell>
                  <TableCell>$75.50</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Under Review</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-10-02</TableCell>
                  <TableCell>Food</TableCell>
                  <TableCell>$120.00</TableCell>
                  <TableCell>
                    <Badge>Submitted</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="dashboard">
        <Card>
          <CardHeader>
            <CardTitle>Expense Dashboard</CardTitle>
            <CardDescription>
              Summary of your expenses and reimbursements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Submitted
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,245.50</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Reimbursed
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$980.00</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ManagerView() {
  return (
    <Tabs defaultValue="review" className="w-full">
      <TabsList>
        <TabsTrigger value="review">Review Expenses</TabsTrigger>
        <TabsTrigger value="reports">Expense Reports</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="communication">Communication</TabsTrigger>
      </TabsList>
      <TabsContent value="review">
        <Card>
          <CardHeader>
            <CardTitle>Review Expenses</CardTitle>
            <CardDescription>
              Approve or reject submitted expenses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Site</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-10-02</TableCell>
                  <TableCell>UCSF Patient 4</TableCell>
                  <TableCell>Food</TableCell>
                  <TableCell>$120.00</TableCell>
                  <TableCell>
                    <Badge>Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Approve
                    </Button>
                    <Button variant="outline" size="sm">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-10-01</TableCell>
                  <TableCell>UCSF Patient 4</TableCell>
                  <TableCell>Travel Expenses</TableCell>
                  <TableCell>$550.00</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Under Review</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Approve
                    </Button>
                    <Button variant="outline" size="sm">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Expense Reports</CardTitle>
            <CardDescription>
              Detailed expense reports across all sites.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Total Expenses by Site
                </h3>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Site</TableHead>
                    <TableHead>Total Expenses</TableHead>
                    <TableHead>Approved</TableHead>
                    <TableHead>Pending</TableHead>
                    <TableHead>Rejected</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>UCSF Patient 4</TableCell>
                    <TableCell>$5,230.00</TableCell>
                    <TableCell>$4,500.00</TableCell>
                    <TableCell>$730.00</TableCell>
                    <TableCell>$0.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>UCSF Patient 5</TableCell>
                    <TableCell>$3,750.00</TableCell>
                    <TableCell>$3,200.00</TableCell>
                    <TableCell>$350.00</TableCell>
                    <TableCell>$200.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Expense Analytics</CardTitle>
            <CardDescription>
              Analyze spending patterns and trends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Expense by Category
                  </CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted rounded-md"></div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Expenses
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted rounded-md"></div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="communication">
        <Card>
          <CardHeader>
            <CardTitle>Communication</CardTitle>
            <CardDescription>
              Interact with site coordinators regarding expense queries.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder-user.jpg"
                    alt="Site Coordinator"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Site Coordinator (UCSF)</p>
                  <p className="text-sm text-muted-foreground">
                    Could you please provide more details about the travel
                    expenses from Oct 1st?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder-user.jpg"
                    alt="Program Manager"
                  />
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">You</p>
                  <p className="text-sm text-muted-foreground">
                    Certainly, I&apos;ll need a breakdown of the transportation
                    costs and any receipts for meals or accommodations.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder="Type your message..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
