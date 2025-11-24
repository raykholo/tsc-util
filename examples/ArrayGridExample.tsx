import { ArrayGrid } from '../src/array-grid';

// Example 1: Basic 3x3 grid with default settings (BL corner, BL anchor)
// Expected: Points start at bottom-left and go right then up
// Indices: 0,1,2 (bottom row), 3,4,5 (middle), 6,7,8 (top row)
function Example1_Basic3x3Grid() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
      >
        {(point) => (
          <hole
            pcbX={point.x}
            pcbY={point.y}
            radius={2}
            name={`point_${point.index}`}
          />
        )}
      </ArrayGrid>
    </board>
  );
}


function Example2_Basic3x3Grid() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startIndex={1}
      >
          <hole
            // pcbX={point.x}
            // pcbY={point.y}
            radius={2}
            name="H"
          />

      </ArrayGrid>
    </board>
  );
}

// TEST: Verify TL and BL corner positioning
// This creates a 2x2 grid with explicit coordinates to verify corner names
function TestCornerPositioning() {
  return (
    <board width="100mm" height="100mm">
      {/* Test with render function to see exact coordinates */}
      <ArrayGrid
        cols={2}
        rows={2}
        spacingX={30}
        spacingY={30}
        startX={20}
        startY={20}
      >
        {(point) => {
          console.log('Grid point:', point);
          return (
            <chip
              pcbX={point.x}
              pcbY={point.y}
              name={`R${point.row}C${point.col}`}
              footprint="0402"
            />
          );
        }}
      </ArrayGrid>
    </board>
  );
}

// Example 3: Center-anchored grid
// Expected: 3x3 grid centered at (50, 50)
// Grid spans from (40,40) to (60,60)
function Example3_CenterAnchoredGrid() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={50}
        startY={50}
        anchor="center"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 4: Bottom-Right corner start (BR)
// Expected: Iteration starts from bottom-right, goes left then up
// Index 0 at bottom-right, proceeds left then up to index 8 at top-left
function Example4_BottomRightCornerStart() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startCorner="BR"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 5: Bottom-Right anchor (grid positioned relative to BR corner)
// Expected: Grid positioned so BR corner is at (80, 80)
// Grid spans from (60,60) to (80,80)
function Example5_BottomRightAnchor() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={80}
        startY={80}
        anchor="BR"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 6: Different grid size
// Expected: 4x3 grid with wider spacing
function Example6_DifferentGridSize() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={4}
        rows={3}
        spacingX={15}
        spacingY={15}
        startX={10}
        startY={10}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 7: Asymmetric spacing
// Expected: Wide horizontal spacing (20mm), tight vertical spacing (8mm)
function Example7_AsymmetricSpacing() {
  return (
    <board width="150mm" height="100mm">
      <ArrayGrid
        cols={5}
        rows={4}
        spacingX={20}
        spacingY={8}
        startX={10}
        startY={10}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 8: Top-Right corner start with center anchor
// Expected: Grid centered at (50,50), iteration starts from top-right (not default BL)
// Index 0 at top-right of grid, proceeds left then down
function Example8_CombinedCornerAndAnchor() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={4}
        rows={4}
        spacingX={8}
        spacingY={8}
        startX={50}
        startY={50}
        startCorner="TR"
        anchor="center"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 9: Standard 0.1" pitch connector
// Expected: 2x5 grid at 2.54mm (0.1") pitch
function Example9_StandardPitchConnector() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={5}
        rows={2}
        spacingX={2.54}  // Standard 0.1" pitch
        spacingY={2.54}
        startX={40}
        startY={40}
        anchor="center"
        startIndex={1}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 10: Large grid - 6x6 matrix
// Expected: 36 pins in a square grid
function Example10_LargeGrid() {
  return (
    <board width="150mm" height="150mm">
      <ArrayGrid
        cols={6}
        rows={6}
        spacingX={15}
        spacingY={15}
        startX={30}
        startY={30}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 11: Bottom-Left corner start (explicit, same as default)
// Expected: Iteration starts from bottom-left, goes right then up
function Example11_BottomLeftCornerStart() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={4}
        rows={3}
        spacingX={12}
        spacingY={12}
        startX={20}
        startY={20}
        startCorner="BL"
      >
        <hole name="H" />
      </ArrayGrid>
    </board>
  );
}

// Example 12: All four corner starts comparison
// Shows how startCorner affects iteration order
function Example12_AllCornersComparison() {
  const gridConfig = {
    cols: 3,
    rows: 3,
    spacingX: 8,
    spacingY: 8,
  };
  return (
    <board width="150mm" height="100mm">
      {/* Top-Left start */}
      <ArrayGrid {...gridConfig} startX={15} startY={15} startCorner="TL">
        <hole name="TL" radius={2}/>
      </ArrayGrid>

      {/* Top-Right start */}
      <ArrayGrid {...gridConfig} startX={50} startY={15} startCorner="TR">
        <hole name="TR" radius={2}/>
      </ArrayGrid>

      {/* Bottom-Left start */}
      <ArrayGrid {...gridConfig} startX={85} startY={15} startCorner="BL">
        <hole name="BL" radius={2}/>
      </ArrayGrid>

      {/* Bottom-Right start */}
      <ArrayGrid {...gridConfig} startX={120} startY={15} startCorner="BR">
        <hole name="BR" radius={2}/>
      </ArrayGrid>
    </board>
  );
}


// Expected Results Reference:
// Note: Default behavior is BL (Bottom-Left) - Row 0 is at the bottom
//
// Example1_Basic3x3Grid:
//   Uses render function API with 3x3 grid, default BL start
//   Creates: point_0 (bottom-left) through point_8 (top-right)
//   Order: 0,1,2 (bottom row L→R), 3,4,5 (middle L→R), 6,7,8 (top L→R)
//
// Example2_Basic3x3Grid:
//   Uses simple child API with startIndex={1}, default BL start
//   Creates: MP_1 (bottom-left) through MP_9 (top-right)
//
// Example3_CenterAnchoredGrid:
//   Grid centered at (50,50), spans (40,40) to (60,60), default BL start
//   Creates: MP_0 (bottom-left) through MP_8 (top-right)
//
// Example4_BottomRightCornerStart:
//   Iteration starts from bottom-right corner (BR)
//   Index 0 at bottom-right, index 8 at top-left
//   Order: 0,1,2 (bottom row R→L), 3,4,5 (middle R→L), 6,7,8 (top R→L)
//
// Example5_BottomRightAnchor:
//   Grid positioned so BR corner is at (80, 80)
//   Grid spans from (60,60) to (80,80), default BL iteration
//
// Example6_DifferentGridSize:
//   4 cols × 3 rows = 12 pins with 15mm spacing, default BL start
//
// Example7_AsymmetricSpacing:
//   Wide horizontal (20mm), tight vertical (8mm)
//   5×4 grid = 20 pins, default BL start
//
// Example8_CombinedCornerAndAnchor:
//   4×4 grid centered at (50,50) with TR start corner
//   Index 0 at top-right of grid, proceeds left then down
//
// Example9_StandardPitchConnector:
//   2×5 grid at 2.54mm (0.1") pitch, startIndex={1}, default BL start
//   Creates: MP_1 (bottom-left) through MP_10 (top-right)
//
// Example10_LargeGrid:
//   6×6 matrix = 36 pins with 15mm spacing, default BL start
//
// Example11_BottomLeftCornerStart:
//   Explicitly using BL corner start (same as default)
//   Index 0 at bottom-left, proceeding right then up
//
// Example12_AllCornersComparison:
//   Side-by-side comparison of all 4 corner start options
//   TL: Index 0 top-left, goes right then down
//   TR: Index 0 top-right, goes left then down
//   BL: Index 0 bottom-left, goes right then up (DEFAULT)
//   BR: Index 0 bottom-right, goes left then up

// Example 13: Skip corners using named pattern
// Expected: 3x3 grid with 5 pins (corners removed)
// Indices: 1,2,3,4,5 (skipping positions 0,2,6,8 which are corners)
function Example13_SkipCorners() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startIndex={1}
        skipPattern="corners"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 14: Skip using custom predicate (diagonal)
// Expected: 3x3 grid with 6 pins (diagonal removed)
// Skips positions where row === col
function Example14_SkipDiagonal() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startIndex={1}
        skipWhen={(point) => point.row === point.col}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 15: Skip center in 5x5 grid
// Expected: 5x5 grid with 24 pins (center removed)
function Example15_SkipCenter() {
  return (
    <board width="150mm" height="150mm">
      <ArrayGrid
        cols={5}
        rows={5}
        spacingX={15}
        spacingY={15}
        startX={10}
        startY={10}
        skipPattern="center"
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 16: Combine pattern and predicate (skip corners AND every other)
// Expected: Complex skip pattern
function Example16_CombinedSkip() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={5}
        rows={5}
        spacingX={12}
        spacingY={12}
        startX={20}
        startY={20}
        skipPattern="corners"
        skipWhen={(point) => point.gridIndex % 2 === 0}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 17: Replace corners with mounting holes
// Expected: 3x3 grid with 5 pins and 4 mounting holes at corners
// Corners get holes, rest get pins
function Example17_ReplaceCorners() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startIndex={1}
        replacePattern={{ corners: <hole diameter="3mm" /> }}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 18: Replace using custom predicate
// Expected: Diagonal replaced with different component
function Example18_ReplaceDiagonal() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={3}
        rows={3}
        spacingX={10}
        spacingY={10}
        startX={20}
        startY={20}
        startIndex={1}
        replaceWhen={(point) =>
          point.row === point.col ? <hole diameter="3mm" /> : undefined
        }
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 19: Combined replacement patterns
// Expected: Corners replaced with holes, center replaced with large pin
function Example19_CombinedReplace() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={5}
        rows={5}
        spacingX={12}
        spacingY={12}
        startX={20}
        startY={20}
        replacePattern={{
          corners: <hole diameter="3mm" />,
          center: <hole diameter="6mm" />
        }}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 20: Replace with skip (skip takes precedence)
// Expected: Center skipped entirely, corners replaced with holes
function Example20_ReplaceAndSkip() {
  return (
    <board width="100mm" height="100mm">
      <ArrayGrid
        cols={5}
        rows={5}
        spacingX={12}
        spacingY={12}
        startX={20}
        startY={20}
        skipPattern="center"
        replacePattern={{ corners: <hole diameter="3mm" /> }}
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Example 21: Dynamic skip using totalRows and totalCols
// Expected: 12x12 grid with second and second-to-last row/col positions skipped
// Demonstrates using point.totalRows and point.totalCols for dynamic predicates
function Example21_DynamicSkipWithTotals() {
  return (
    <board width="150mm" height="150mm">
      <ArrayGrid
        cols={12}
        rows={12}
        spacingX={8}
        spacingY={8}
        startX={10}
        startY={10}
        startIndex={1}
        skipWhen={(point) =>
          (point.row === 1 && point.col === 1) ||
          (point.row === 1 && point.col === point.totalCols - 2) ||
          (point.row === point.totalRows - 2 && point.col === 1) ||
          (point.row === point.totalRows - 2 && point.col === point.totalCols - 2)
        }
      >
        <hole name="H" radius={2}/>
      </ArrayGrid>
    </board>
  );
}

// Uncomment the example you want to test:
// export default Example1_Basic3x3Grid;
// export default Example2_Basic3x3Grid;
// export default TestCornerPositioning;
// export default Example3_CenterAnchoredGrid;
// export default Example4_BottomRightCornerStart;
// export default Example5_BottomRightAnchor;
// export default Example6_DifferentGridSize;
// export default Example7_AsymmetricSpacing;
// export default Example8_CombinedCornerAndAnchor;
// export default Example9_StandardPitchConnector;
// export default Example10_LargeGrid;
// export default Example11_BottomLeftCornerStart;
// export default Example12_AllCornersComparison;
// export default Example13_SkipCorners;
// export default Example14_SkipDiagonal;
// export default Example15_SkipCenter;
// export default Example16_CombinedSkip;
// export default Example17_ReplaceCorners;
// export default Example18_ReplaceDiagonal;
// export default Example19_CombinedReplace;
// export default Example20_ReplaceAndSkip;
export default Example21_DynamicSkipWithTotals;
