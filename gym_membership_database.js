// Patrick O'Neill - MongoDB Assignment 2
// Student Number - 20119129
// Gym Membership Management System

db = db.getSiblingDB("gym_20119129");
db.dropDatabase();

// 3.1 Collections - Members collection with JSON schema validation
db.createCollection("members", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["member_id", "first_name", "last_name", "email", "join_date"],
      properties: {
        member_id: { bsonType: "int" },
        first_name: { bsonType: "string" },
        last_name: { bsonType: "string" },
        phone: { bsonType: "string" },
        email: { bsonType: "string" },
        date_of_birth: { bsonType: "string" },
        join_date: { bsonType: "string" },
        emergency_contact: {
          bsonType: "object",
          properties: {
            name: { bsonType: "string" },
            phone: { bsonType: "string" }
          }
        }
      }
    }
  }
});

// 3.1 Collections - Subscription tiers collection with JSON schema validation
db.createCollection("subscription_tiers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["tier_id", "tier_name", "monthly_price"],
      properties: {
        tier_id: { bsonType: "int" },
        tier_name: { bsonType: "string" },
        monthly_price: { bsonType: "int" },
        pool_access: { bsonType: "bool" },
        sauna_access: { bsonType: "bool" },
        recovery_access: { bsonType: "bool" },
        store_discount_percent: { bsonType: "int" }
      }
    }
  }
});

// 3.1 Collections - Memberships collection with JSON schema validation
db.createCollection("memberships", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["membership_id", "member_id", "tier_id", "start_date", "status"],
      properties: {
        membership_id: { bsonType: "int" },
        member_id: { bsonType: "int" },
        tier_id: { bsonType: "int" },
        start_date: { bsonType: "string" },
        status: { bsonType: "string" }
      }
    }
  }
});

// 3.2 Documents - Insert members documents
db.members.insertMany([
  {
    member_id: 1,
    first_name: "John",
    last_name: "Murphy",
    phone: "0851111111",
    email: "john.murphy@email.com",
    date_of_birth: "1995-06-12",
    join_date: "2026-01-10",
    emergency_contact: { name: "Mary Murphy", phone: "0861111111" }
  },
  {
    member_id: 2,
    first_name: "Sarah",
    last_name: "Kelly",
    phone: "0852222222",
    email: "sarah.kelly@email.com",
    date_of_birth: "1998-03-21",
    join_date: "2026-02-01",
    emergency_contact: { name: "Tom Kelly", phone: "0862222222" }
  },
  {
    member_id: 3,
    first_name: "Liam",
    last_name: "O'Brien",
    phone: "0853333333",
    email: "liam.obrien@email.com",
    date_of_birth: "1990-01-11",
    join_date: "2026-03-01",
    emergency_contact: { name: "Sean O'Brien", phone: "0863333333" }
  },
  {
    member_id: 4,
    first_name: "Niamh",
    last_name: "Ryan",
    phone: "0854441111",
    email: "niamh.ryan@email.com",
    date_of_birth: "1997-08-09",
    join_date: "2026-01-20",
    emergency_contact: { name: "Anne Ryan", phone: "0864444444" }
  },
  {
    member_id: 5,
    first_name: "Daniel",
    last_name: "Flynn",
    phone: "0855551111",
    email: "daniel.flynn@email.com",
    date_of_birth: "1993-02-17",
    join_date: "2026-02-14",
    emergency_contact: { name: "Paul Flynn", phone: "0865555555" }
  },
  {
    member_id: 6,
    first_name: "Chloe",
    last_name: "McCarthy",
    phone: "0856661111",
    email: "chloe.mccarthy@email.com",
    date_of_birth: "2000-12-04",
    join_date: "2026-03-05",
    emergency_contact: { name: "Lisa McCarthy", phone: "0866666666" }
  },
  {
    member_id: 7,
    first_name: "Aoife",
    last_name: "Doyle",
    phone: "0857771111",
    email: "aoife.doyle@email.com",
    date_of_birth: "1999-04-18",
    join_date: "2026-03-12",
    emergency_contact: { name: "Brian Doyle", phone: "0867777777" }
  },
  {
    member_id: 8,
    first_name: "Conor",
    last_name: "Burke",
    phone: "0858881111",
    email: "conor.burke@email.com",
    date_of_birth: "1992-09-25",
    join_date: "2026-03-18",
    emergency_contact: { name: "Eileen Burke", phone: "0868888888" }
  },
  {
    member_id: 9,
    first_name: "Megan",
    last_name: "Fitzgerald",
    phone: "0859991111",
    email: "megan.fitzgerald@email.com",
    date_of_birth: "1996-11-03",
    join_date: "2026-04-01",
    emergency_contact: { name: "Laura Fitzgerald", phone: "0869999999" }
  },
  {
    member_id: 10,
    first_name: "Sean",
    last_name: "Collins",
    phone: "0851010101",
    email: "sean.collins@email.com",
    date_of_birth: "1991-07-30",
    join_date: "2026-04-10",
    emergency_contact: { name: "Rachel Collins", phone: "0861010101" }
  }
]);

// 3.2 Documents - Insert subscription tier documents
db.subscription_tiers.insertMany([
  {
    tier_id: 1,
    tier_name: "Gold",
    monthly_price: 80,
    pool_access: true,
    sauna_access: true,
    recovery_access: true,
    store_discount_percent: 15
  },
  {
    tier_id: 2,
    tier_name: "Silver",
    monthly_price: 55,
    pool_access: true,
    sauna_access: false,
    recovery_access: false,
    store_discount_percent: 10
  },
  {
    tier_id: 3,
    tier_name: "Bronze",
    monthly_price: 35,
    pool_access: false,
    sauna_access: false,
    recovery_access: false,
    store_discount_percent: 5
  }
]);

// 3.2 Documents - Insert membership documents linking members to subscription tiers
db.memberships.insertMany([
  { membership_id: 1, member_id: 1, tier_id: 1, start_date: "2026-01-10", status: "Active" },
  { membership_id: 2, member_id: 2, tier_id: 2, start_date: "2026-02-01", status: "Active" },
  { membership_id: 3, member_id: 3, tier_id: 3, start_date: "2026-03-01", status: "Active" },
  { membership_id: 4, member_id: 4, tier_id: 1, start_date: "2026-01-20", status: "Active" },
  { membership_id: 5, member_id: 5, tier_id: 2, start_date: "2026-02-14", status: "Suspended" },
  { membership_id: 6, member_id: 6, tier_id: 1, start_date: "2026-03-05", status: "Active" },
  { membership_id: 7, member_id: 7, tier_id: 3, start_date: "2026-03-12", status: "Active" },
  { membership_id: 8, member_id: 8, tier_id: 2, start_date: "2026-03-18", status: "Active" },
  { membership_id: 9, member_id: 9, tier_id: 1, start_date: "2026-04-01", status: "Active" },
  { membership_id: 10, member_id: 10, tier_id: 3, start_date: "2026-04-10", status: "Expired" }
]);

// 3.3 Find Queries

// Query 1: Find Gold memberships
db.memberships.find({ tier_id: 1 });

// Query 2: Find active memberships and limit results
db.memberships.find({ status: "Active" }).limit(2);

// Query 3: Find subscription tiers with monthly price greater than 50
db.subscription_tiers.find({ monthly_price: { $gt: 50 } });

// Query 4: Find Gold and Silver subscription tiers using $in
db.subscription_tiers.find({
  tier_name: { $in: ["Gold", "Silver"] }
});

// Query 5: Projection query showing selected member fields only
db.members.find(
  {},
  {
    first_name: 1,
    last_name: 1,
    email: 1,
    _id: 0
  }
);

// 3.4 Aggregation Pipelines

// Aggregation 1: Count memberships by status
db.memberships.aggregate([
  {
    $group: {
      _id: "$status",
      total_memberships: { $sum: 1 }
    }
  }
]);

// Aggregation 2: Join memberships with subscription tier details
db.memberships.aggregate([
  {
    $lookup: {
      from: "subscription_tiers",
      localField: "tier_id",
      foreignField: "tier_id",
      as: "tier_details"
    }
  },
  { $unwind: "$tier_details" },
  {
    $project: {
      _id: 0,
      membership_id: 1,
      member_id: 1,
      status: 1,
      tier_name: "$tier_details.tier_name",
      monthly_price: "$tier_details.monthly_price"
    }
  },
  { $limit: 1 }
]);

// 3.5 Verification Queries and Output

print("\n==============================");
print(" MEMBERS COUNT ");
print("==============================");
print(db.members.countDocuments());

print("\n==============================");
print(" MEMBERSHIPS COUNT ");
print("==============================");
print(db.memberships.countDocuments());

print("\n==============================");
print(" SUBSCRIPTION TIERS COUNT ");
print("==============================");
print(db.subscription_tiers.countDocuments());

print("\n==============================");
print(" ACTIVE MEMBERSHIPS ");
print("==============================");
db.memberships.find(
  { status: "Active" },
  { _id: 0, membership_id: 1, member_id: 1, tier_id: 1, status: 1 }
).limit(2).forEach(printjson);

print("\n==============================");
print(" GOLD AND SILVER TIERS ");
print("==============================");
db.subscription_tiers.find(
  { tier_name: { $in: ["Gold", "Silver"] } },
  { _id: 0, tier_id: 1, tier_name: 1, monthly_price: 1 }
).forEach(printjson);

print("\n==============================");
print(" MEMBERSHIP STATUS AGGREGATION ");
print("==============================");
db.memberships.aggregate([
  {
    $group: {
      _id: "$status",
      total_memberships: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      status: "$_id",
      total_memberships: 1
    }
  }
]).forEach(printjson);

print("\n==============================");
print(" MEMBERSHIP LOOKUP AGGREGATION ");
print("==============================");
db.memberships.aggregate([
  {
    $lookup: {
      from: "subscription_tiers",
      localField: "tier_id",
      foreignField: "tier_id",
      as: "tier_details"
    }
  },
  { $unwind: "$tier_details" },
  {
    $project: {
      _id: 0,
      membership_id: 1,
      member_id: 1,
      status: 1,
      tier_name: "$tier_details.tier_name",
      monthly_price: "$tier_details.monthly_price"
    }
  },
  { $limit: 1 }
]).forEach(printjson);
