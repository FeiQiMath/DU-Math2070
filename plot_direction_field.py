import numpy as np
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

# Create grid points
x = np.arange(-1, 6)
y = np.arange(-2, 4)
X, Y = np.meshgrid(x, y)

# Calculate derivatives
dydt = (Y+1)*(Y-2)

# Set up the plot
plt.figure(figsize=(10, 6))

# Define dark colors for each y-value
colors = ['#1f77b4',  # dark blue
          '#d62728',  # dark red
          '#ff7f0e',  # dark orange
          '#2ca02c',  # dark green
          '#9467bd',  # dark purple
          '#8c564b']  # dark brown

# Plot direction field
length = 0.3  # Length of line segments
for i in range(len(y)):
    for j in range(len(x)):
        # Calculate slope and normalize
        slope = dydt[i,j]
        dx = length / np.sqrt(1 + slope**2)
        dy = slope * dx
        
        # Calculate start and end points
        x_start = X[i,j] - dx/2
        x_end = X[i,j] + dx/2
        y_start = Y[i,j] - dy/2
        y_end = Y[i,j] + dy/2
        
        # Plot line segment with dark colors
        plt.plot([x_start, x_end], [y_start, y_end], 
                linewidth=0.8, 
                color=colors[i])

# Add coordinate axes
plt.axhline(y=0, color='k', linewidth=0.5)
plt.axvline(x=0, color='k', linewidth=0.5)

# Configure plot
plt.grid(False)
plt.xlim(-1.5, 5.5)
plt.ylim(-2.5, 3.5)

# Remove all spines
for spine in plt.gca().spines.values():
    spine.set_visible(False)

# Remove existing ticks
plt.gca().set_xticks([])
plt.gca().set_yticks([])

# Add custom ticks on the axes
ax = plt.gca()
xticks = range(-1, 6)
yticks = range(-2, 4)

# Set up Times New Roman font
font_props = FontProperties(family='Times New Roman')

# Add x-axis ticks and labels at y=0
for x in xticks:
    if x != 0:  # Skip 0 as it will be handled separately
        label = f"−{abs(x)}" if x < 0 else str(x)
        plt.text(x, -0.2, label, ha='center', va='top', fontproperties=font_props)
        plt.plot([x, x], [-0.1, 0.1], 'k-', linewidth=0.5)

# Add y-axis ticks and labels at x=0
for y in yticks:
    if y != 0:  # Skip 0 as it will be handled separately
        label = f"−{abs(y)}" if y < 0 else str(y)
        plt.text(-0.2, y, label, ha='right', va='center', fontproperties=font_props)
        plt.plot([-0.1, 0.1], [y, y], 'k-', linewidth=0.5)

# Add 0 at southwest corner of origin
plt.text(-0.1, -0.2, "0", ha='right', va='top', fontproperties=font_props)

# Save plot
plt.savefig('direction_field.png', dpi=300, bbox_inches='tight')
plt.close() 