import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL
} as any)

async function main() {
  // 1. Create Stations
  const stationA = await prisma.station.upsert({
    where: { code: 'NDLS' },
    update: {},
    create: { name: 'New Delhi', code: 'NDLS' },
  })

  const stationB = await prisma.station.upsert({
    where: { code: 'CNB' },
    update: {},
    create: { name: 'Kanpur Central', code: 'CNB' },
  })

  const stationC = await prisma.station.upsert({
    where: { code: 'HWH' },
    update: {},
    create: { name: 'Howrah Jn', code: 'HWH' },
  })

  // 2. Create a Train with a Schedule (Stops)
  const train = await prisma.train.create({
    data: {
      trainNumber: '12302',
      name: 'Kolkata Rajdhani',
      currentStatus: 'On Time',
      schedule: {
        create: [
          {
            stationId: stationA.id,
            arrivalTime: new Date('2024-01-20T16:50:00Z'),
            departureTime: new Date('2024-01-20T16:50:00Z'),
            sequenceOrder: 1
          },
          {
            stationId: stationB.id,
            arrivalTime: new Date('2024-01-20T21:30:00Z'),
            departureTime: new Date('2024-01-20T21:35:00Z'),
            sequenceOrder: 2
          },
          {
            stationId: stationC.id,
            arrivalTime: new Date('2024-01-21T09:55:00Z'),
            departureTime: new Date('2024-01-21T09:55:00Z'),
            sequenceOrder: 3
          }
        ]
      }
    }
  })

  console.log({ train })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })