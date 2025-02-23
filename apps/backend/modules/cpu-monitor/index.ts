import osu from 'node-os-utils';

const getServerStats = async () => {
  const cpu = osu.cpu;
  const mem = osu.mem;
  const os = osu.os;
  const drive = osu.drive;

  const cpuUsage = await cpu.usage();
  const memInfo = await mem.info();
  const netstat = osu.netstat;
  const osInfo = {
    platform: os.platform(),
    uptime: os.uptime(),
    hostname: os.hostname(),
    type: os.type(),
    arch: os.arch(),
    ip: os.ip(),
  };
  const networkStats = await netstat.stats();
  return {
    cpu: {
      current: cpuUsage,
      total: 100 // CPU usage is typically represented as a percentage out of 100
    },
    memory: {
      current: memInfo.usedMemMb,
      total: memInfo.totalMemMb
    },
    network: networkStats,
    osInfo,
  };
};

export { getServerStats   };

