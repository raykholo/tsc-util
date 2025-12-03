# tsc-util

Ray's better ArrayGrid function for tscircuit. More to come.

## Installation

1. Configure npm to use GitHub Package Registry for @raykholo packages:
   ```bash
   npm config set @raykholo:registry https://npm.pkg.github.com
   ```

2. Authenticate with GitHub (requires a personal access token with `read:packages` scope):
   ```bash
   npm login --scope=@raykholo --registry=https://npm.pkg.github.com
   ```

3. Install the package:
   ```bash
   npm install @raykholo/tsc-util
   ```

## Usage

```typescript
import { ArrayGrid } from '@raykholo/tsc-util';

// Use ArrayGrid in your tscircuit projects
<ArrayGrid cols={5} rows={3} spacingX={20} spacingY={15} startX={100} startY={50}>
  <Pin name="pin" />
</ArrayGrid>
``` 